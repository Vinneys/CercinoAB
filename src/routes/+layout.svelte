<script>
	import favicon from '$lib/assets/FAVICON256.png';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Customer Search</title>
	<meta name="description" content="Search and find customers quickly and easily" />
</svelte:head>

<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background: #000000;
	}

	:global(*) {
		box-sizing: border-box;
	}

	main {
		min-height: 100vh;
	}
</style>
