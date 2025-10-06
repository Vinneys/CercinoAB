<script>
    /** @type {'button'|'submit'|'reset'} */
    export let type = 'button';
    /** @type {'primary'|'secondary'|'ghost'|'danger'} */
    export let variant = 'primary';
    /** @type {'sm'|'md'|'lg'} */
    export let size = 'md';
	export let disabled = false;
	export let fullWidth = false;
</script>

<button
	{type}
	disabled={disabled}
	class="btn {variant} {size} {fullWidth ? 'full' : ''}"
>
	<slot />
</button>

<style>
	.btn {
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
		font-weight: bold;
		color: white;
	}

	.btn.sm { padding: 0.5rem 0.75rem; font-size: 0.85rem; }
	.btn.md { padding: 0.75rem 1rem; font-size: 1rem; }
	.btn.lg { padding: 1rem 1.25rem; font-size: 1.05rem; }
	.btn.full { width: 100%; }

	/* Variants */
	.btn.primary { background: #F16CB3; }
	.btn.primary:hover { background: #e55ba0; }

	.btn.secondary { background: #ffffff; color: #000000; }
	.btn.secondary:hover { background: #f2f2f2; }

	.btn.ghost { background: transparent; border: 2px solid #555555; color: white; }
	.btn.ghost:hover { background: #333333; border-color: #777777; }

	.btn.danger { background: #c0392b; }
	.btn.danger:hover { background: #e74c3c; }

	.btn:disabled { background: #666666; cursor: not-allowed; }
</style>

