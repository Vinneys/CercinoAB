<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
  let items: any[] = [];
  let loading = true;

  async function load() {
    const out = await fetch('/api/tickets').then(r=>r.json());
    items = out.items ?? [];
    loading = false;
  }
  onMount(load);

  function mapsUrl(ev: any) {
    const q = encodeURIComponent([ev?.venueAddress, ev?.city, ev?.country].filter(Boolean).join(', '));
    return `https://maps.google.com/?q=${q}`;
  }
  async function toDataURL(text: string) {
    return await QRCode.toDataURL(text);
  }
</script>

<h1>My Tickets</h1>
{#if loading}<p>Loading…</p>{/if}
{#each items as t}
  <article style="border:1px solid #eee;padding:12px;border-radius:8px;margin:12px 0">
    <h3>{t.event?.title}</h3>
    <small>{new Date(t.event?.startsAt).toLocaleString()}</small>
    {#if t.event}
      <div><a target="_blank" rel="noopener" href={mapsUrl(t.event)}>Open in Google Maps</a></div>
    {/if}
    <div>Serial: {t.serial}</div>
    <img alt="QR" src={await toDataURL(JSON.stringify({ qr:t.qrDataKey }))} style="width:160px;height:160px;" />
  </article>
{/each}

<script>
	import { goto } from '$app/navigation';
	
	function goToApp() {
		goto('/app');
	}
</script>

<svelte:head>
	<title>Cercino Events - Tickets</title>
</svelte:head>

<div class="tickets-page">
	<h1>Tickets</h1>
	<p>Your tickets will appear here.</p>
	<button on:click={goToApp}>Go to App</button>
</div>

<style>
	.tickets-page {
		padding: 2rem;
		text-align: center;
		color: white;
		background: #000000;
		min-height: 100vh;
	}
	
	button {
		background: #F16CB3;
		color: white;
		border: none;
		padding: 1rem 2rem;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 1rem;
	}
</style>
