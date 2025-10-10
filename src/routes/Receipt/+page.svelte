<script>
	import ReciptImg from '$lib/assets/ReciptImg.png';
</script>

<div class="receipt-page">
	<div class="image-container">
		<img src={ReciptImg} alt="Travis Scott performing on stage with pyrotechnics" class="event-image" />
	</div>

	<div class="content-container">
		<h1 class="main-heading">LET'S F<span class="asterisk">*</span>CKING <span class="pink-text">PARTY</span></h1>

		<div class="receipt-section">
			<h2 class="section-title">Receipt</h2>

			<div class="receipt-item">
				<span class="label">Customer Name</span>
				<span class="value">Victor Shoaga</span>
			</div>
			<div class="receipt-item">
				<span class="label">Customer Type</span>
				<span class="value">R3</span>
			</div>
			<div class="receipt-item">
				<span class="label">Address</span>
				<span class="value address-value">7953 Oakland St.<br/>Honolulu, HI 96815</span>
			</div>

			<div class="receipt-item meter-number">
				<span class="label">Meter Number</span>
				<span class="value">04172997324</span>
			</div>

			<div class="receipt-item">
				<span class="label">Amount</span>
				<span class="value">950 NGN</span>
			</div>
			<div class="receipt-item">
				<span class="label">Tax</span>
				<span class="value">50 NGN</span>
			</div>
			<div class="receipt-item total-line">
				<span class="label">Total</span>
				<span class="value">1000 NGN</span>
			</div>

			<div class="receipt-item operator-info">
				<span class="label">Operator</span>
				<span class="value">Ade</span>
			</div>
			<div class="receipt-item">
				<span class="label">Download Receipt</span>
				<span class="value">Support</span>
			</div>
		</div>

		<button class="tickets-button">Tickets</button>
	</div>
</div>

<style>
	.receipt-page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: black;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		overflow-x: hidden;
	}

	.image-container {
		width: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.event-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.content-container {
		flex-grow: 1;
		padding: 1.1rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.main-heading {
		font-size: 2.5rem;
		font-weight: bold;
		text-align: left;
		margin: 0;
		line-height: 1.1;
		color: white;
	}

	.pink-text {
		color: #F16CB3;
	}

	.asterisk {
		color: white;
	}

	.receipt-section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.section-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 1rem;
		color: white;
	}

	.receipt-item {
		display: flex;
		justify-content: space-between;
		font-size: 0.9rem;
		line-height: 1.4;
		font-family: monospace;
	}

	.label {
		color: #cccccc;
	}

	.value {
		text-align: right;
		color: white;
	}

	.address-value {
		white-space: pre-line;
	}

	.meter-number {
		margin-top: 1rem;
	}

	.total-line {
		font-weight: bold;
		font-size: 1rem;
		margin-top: 1rem;
		padding-top: 0.5rem;
		border-top: 1px solid #333333;
	}

	.operator-info {
		margin-top: 1.5rem;
	}

	.tickets-button {
		background-color: #F16CB3;
		color: white;
		font-size: 1.1rem;
		font-weight: bold;
		padding: 1rem 1.5rem;
		border: none;
		border-radius: 7px;
		cursor: pointer;
		width: 100%;
		text-transform: uppercase;
		margin-top: auto;
		box-sizing: border-box;
		transition: all 0.2s ease;
	}

	.tickets-button:hover {
		background-color: #ff8bb3;
		transform: translateY(-1px);
	}
</style>
