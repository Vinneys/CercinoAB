<script>
	export let active = false;
	export let disabled = false;
</script>

<button class="tab-btn {active ? 'active' : ''}" disabled={disabled}>
	<slot />
</button>

<style>
	.tab-btn {
		flex: 1;
		padding: 0.75rem 1rem;
		border: none;
		background: #ffffff;
		color: #000000;
		cursor: pointer;
		transition: all 0.2s ease;
		border-radius: 5px;
		font-weight: 500;
	}

	.tab-btn:hover { background: #f2f2f2; color: #000000; }
	.tab-btn.active { background: #1C1C1C; color: white; }
	.tab-btn:disabled { opacity: 0.6; cursor: not-allowed; }
</style>

