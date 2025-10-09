<script>
	import favicon from '$lib/assets/FAVICON256.png';
	import { page } from '$app/stores';
	import '../app.css';
	
	export let data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Cercino Events</title>
	<meta name="description" content="Discover amazing events in your city" />
</svelte:head>

{#if data.user}
	<div class="user-bar">
		<span class="user-info">Welcome, {data.user.username}</span>
		<form method="POST" action="/logout" class="logout-form">
			<button type="submit" class="logout-btn">Logout</button>
		</form>
	</div>
{/if}

<main>
	<slot />
</main>

<style>

	.user-bar {
		position: fixed;
		top: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.8);
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		z-index: 1000;
		border-bottom-left-radius: 0;
		border: 1px solid #333;
	}

	.user-info {
		color: white;
		font-size: 0.9rem;
	}

	.logout-form {
		margin: 0;
	}

	.logout-btn {
		background: #F16CB3;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 0;
		font-size: 0.8rem;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.logout-btn:hover {
		background: #F16CB3;
	}

    main {
        /* Fill viewport minus navbar height and safe area so we don't force vertical scroll by default */
        min-height: calc(100vh - var(--nav-h) - env(safe-area-inset-bottom));
        min-height: calc(100vh - var(--nav-h) - constant(safe-area-inset-bottom));
    }
</style>