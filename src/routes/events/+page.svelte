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
