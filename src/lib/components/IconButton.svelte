<script>
	export let ariaLabel;
	export let size = 'md'; // 'sm' | 'md' | 'lg'
	export let variant = 'ghost'; // 'ghost' | 'solid'
	export let disabled = false;
</script>

<button
	class="icon-btn {size} {variant}"
	aria-label={ariaLabel}
	disabled={disabled}
>
	<slot />
</button>

<style>
	.icon-btn {
		background: transparent;
		border: none;
		cursor: pointer;
		border-radius: 8px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s ease;
		color: white;
	}

	.icon-btn.sm { width: 28px; height: 28px; }
	.icon-btn.md { width: 36px; height: 36px; }
	.icon-btn.lg { width: 44px; height: 44px; }

	.icon-btn.ghost:hover { background: rgba(255,255,255,0.08); }
	.icon-btn.solid { background: #3a3a3a; }
	.icon-btn.solid:hover { background: #4a4a4a; }

	.icon-btn:disabled { opacity: 0.5; cursor: not-allowed; }
</style>

