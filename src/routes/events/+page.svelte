<script lang="ts">
  import { onMount } from 'svelte';
  let events: any[] = [];
  let ticketTypes: Record<string, any[]> = {};
  let loading = true;

  async function load() {
    const out = await fetch('/api/events').then(r=>r.json());
    events = out.items ?? [];
    loading = false;
  }
  onMount(load);

  async function buy(eventId: string, ticketTypeId: string) {
    await fetch('/api/tickets', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ eventId, ticketTypeId }) });
    alert('Ticket purchased (dev). Check your Tickets page.');
  }
</script>

<h1>Events</h1>
{#if loading}<p>Loading…</p>{/if}
{#each events as ev}
  <article style="border:1px solid #eee;padding:12px;border-radius:8px;margin:12px 0">
    <h3>{ev.title}</h3>
    <small>{new Date(ev.startsAt).toLocaleString()}</small>
    <div>{ev.venueAddress} {ev.city} {ev.country}</div>
    <details>
      <summary>Tickets</summary>
      {#await fetch(`/api/events`).then(()=>[]) then _}
        <!-- In-memory demo: create ticket types using admin/dev tool; for now show a single demo buy button -->
        <button on:click={() => buy(ev.id, 'demo')} disabled>Buy (add ticket types via API)</button>
      {/await}
    </details>
  </article>
{/each}

<script>
	import { goto } from '$app/navigation';
	
	function goToApp() {
		goto('/app');
	}
</script>

<svelte:head>
	<title>Cercino Events - Events</title>
</svelte:head>

<div class="events-page">
	<h1>Events</h1>
	<p>Browse all events here.</p>
	<button on:click={goToApp}>Go to App</button>
</div>

<style>
	.events-page {
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
