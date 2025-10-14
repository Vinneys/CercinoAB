<script>
	import BottomNav from '$lib/components/BottomNav.svelte';
	import ReciptImg from '$lib/assets/ReciptImg.png';

	// simple local state (no connections)
	let eventName = '';
	let description = '';
	let ticketPrice = '';
</script>

<div class="create-event-page desktop-container">
	<!-- Hero Image -->
	<div class="event-hero desktop-hero">
		<img src={ReciptImg} alt="Travis Scott performing on stage with pyrotechnics" class="event-hero-image" />
	</div>

	<!-- Form Content -->
	<div class="form-container desktop-form">
		<h1 class="main-title desktop-title">Create Event</h1>
		<p class="subtitle desktop-subtitle">You have to follow our rules in order to create the perfect experience.</p>

        <div class="form-section">
            <div class="input-group">
                <label for="eventName" class="input-label">Event name</label>
                <input bind:value={eventName} type="text" id="eventName" placeholder="Event name" class="text-input" />
            </div>

            <div class="input-group">
                <label for="description" class="input-label">Description</label>
                <textarea bind:value={description} id="description" placeholder="Description" class="text-input textarea"></textarea>
            </div>

            <div class="input-group">
                <label for="ticketPrice" class="input-label">Ticket Price</label>
                <input bind:value={ticketPrice} type="text" id="ticketPrice" placeholder="Ticket price" class="text-input" />
            </div>

            <div class="input-group s-yWcvJvT4y42u">
                <label class="input-label">Upload image</label>
                <div class="upload-bar">
                    <button class="insert-file-btn" type="button">Insert file</button>
                    <div class="file-hint">The file can't be over 20MB</div>
                </div>
            </div>

            <div class="checkbox-group">
                <input type="checkbox" id="acceptTerms" class="checkbox-input" />
                <label for="acceptTerms" class="checkbox-label">Accept terms of policy</label>
            </div>
        </div>

        <button class="create-event-btn">CREATE EVENT</button>
	</div>

</div>

<style>
	.create-event-page {
		background: #000000;
		color: white;
		font-family: 'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.event-hero {
		width: 100%;
		overflow: hidden;
		height: 23vh;
		position: relative;
	}

	.event-hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.form-container {
		flex-grow: 1;
		padding: 1.5rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.main-title {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
	}

	.subtitle {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		margin: -1rem 0 0 0;
	}

	.form-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

.upload-dropzone {
		border: 2px dashed rgba(255, 255, 255, 0.3);
		background: #1C1C1C;
		border-radius: 12px;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
}

.upload-icon {
		font-size: 1.75rem;
		margin-bottom: 0.75rem;
}

.upload-text {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.85);
}

.upload-bar {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #1C1C1C;
		border-radius: 7px;
		padding: 0.75rem 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
}

.insert-file-btn {
		background: #6b6b6b;
		border: none;
		border-radius: 4px;
		color: white;
		padding: 0.6rem 1rem;
		font-size: 0.95rem;
		cursor: pointer;
}

.file-hint {
		color: rgba(255, 255, 255, 0.85);
		font-size: 0.95rem;
}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.input-label {
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.text-input {
		width: 100%;
		padding: 0.75rem 1rem;
		background: #1C1C1C;
		border: 1px solid transparent;
		border-radius: 7px;
		color: white;
		outline: none;
		box-sizing: border-box;
		transition: all 0.2s ease;
	}

	.text-input::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	.text-input:focus {
		border-color: #F16CB3;
		background: #2a2a2a;
	}

	.textarea {
		min-height: 12vh;
		resize: vertical;
	}

	.helper-text {
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.5);
		margin: -0.5rem 0 0.5rem 0;
		line-height: 1.4;
	}

	.duplicated-text {
		margin-top: -0.5rem;
	}

	.location-selector {
		display: flex;
		width: 100%;
		background: #1C1C1C;
		border-radius: 7px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}

	.location-button {
		flex: 1;
		padding: 0.75rem 1rem;
		background: transparent;
		border: none;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.location-button.active {
		background: #2a2a2a;
		font-weight: bold;
	}

	.location-button:hover:not(.active) {
		background: #333333;
	}

	.checkbox-group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.checkbox-input {
		width: 1.2rem;
		height: 1.2rem;
		background: #1C1C1C;
		border: 1px solid transparent;
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		cursor: pointer;
		position: relative;
		transition: all 0.2s ease;
	}

	.checkbox-input:checked {
		background: #F16CB3;
		border-color: #F16CB3;
	}

	.checkbox-input:checked::after {
		content: '✓';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 0.9rem;
	}

	.checkbox-label {
		font-size: 1rem;
		cursor: pointer;
	}

	.create-event-btn {
		width: 100%;
		padding: 1rem;
		background: #F16CB3;
		border: none;
		border-radius: 7px;
		color: white;
		font-size: 1.1rem;
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease;
		margin-top: auto;
	}

	.create-event-btn:hover {
		background: #ff8bb3;
		transform: translateY(-1px);
	}

.continue-btn {
		width: 100%;
		padding: 1rem;
		background: #F16CB3;
		border: none;
		border-radius: 7px;
		color: white;
		font-size: 1.1rem;
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease;
}

.continue-btn:hover {
		background: #ff8bb3;
		transform: translateY(-1px);
}

/* Desktop Responsive Styles */
@media (min-width: 768px) {
	.create-event-page {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.event-hero {
		height: 35vh;
		border-radius: 15px;
		overflow: hidden;
		margin-bottom: 2rem;
	}

	.form-container {
		padding: 2rem 0;
	}

	.main-title {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 1rem;
		background: linear-gradient(45deg, #F16CB3, #ffffff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.1rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	.form-section {
		gap: 1.5rem;
	}

	.input-label {
		font-size: 1.1rem;
		font-weight: 600;
	}

	.text-input {
		padding: 1rem 1.5rem;
		font-size: 1rem;
		border-radius: 10px;
	}

	.textarea {
		min-height: 15vh;
	}

	.upload-bar {
		padding: 1rem 1.5rem;
		border-radius: 10px;
	}

	.insert-file-btn {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		border-radius: 8px;
	}

	.checkbox-group {
		margin-top: 1rem;
	}

	.checkbox-input {
		width: 1.5rem;
		height: 1.5rem;
	}

	.checkbox-label {
		font-size: 1.1rem;
	}

	.create-event-btn {
		padding: 1.25rem;
		font-size: 1.2rem;
		border-radius: 10px;
		margin-top: 2rem;
	}
}

@media (min-width: 1024px) {
	.create-event-page {
		max-width: 900px;
		padding: 0 3rem;
	}

	.event-hero {
		height: 40vh;
	}

	.form-container {
		padding: 3rem 0;
	}

	.main-title {
		font-size: 3rem;
	}

	.subtitle {
		font-size: 1.2rem;
	}

	.form-section {
		gap: 2rem;
	}

	.input-label {
		font-size: 1.2rem;
	}

	.text-input {
		padding: 1.25rem 2rem;
		font-size: 1.1rem;
	}

	.textarea {
		min-height: 18vh;
	}

	.upload-bar {
		padding: 1.25rem 2rem;
	}

	.insert-file-btn {
		padding: 1rem 2rem;
		font-size: 1.1rem;
	}

	.checkbox-input {
		width: 1.75rem;
		height: 1.75rem;
	}

	.checkbox-label {
		font-size: 1.2rem;
	}

	.create-event-btn {
		padding: 1.5rem;
		font-size: 1.3rem;
	}
}

@media (min-width: 1440px) {
	.create-event-page {
		max-width: 1000px;
		padding: 0 4rem;
	}

	.event-hero {
		height: 45vh;
	}

	.form-container {
		padding: 4rem 0;
	}

	.main-title {
		font-size: 3.5rem;
	}

	.subtitle {
		font-size: 1.3rem;
	}

	.form-section {
		gap: 2.5rem;
	}

	.input-label {
		font-size: 1.3rem;
	}

	.text-input {
		padding: 1.5rem 2.5rem;
		font-size: 1.2rem;
	}

	.textarea {
		min-height: 20vh;
	}

	.upload-bar {
		padding: 1.5rem 2.5rem;
	}

	.insert-file-btn {
		padding: 1.25rem 2.5rem;
		font-size: 1.2rem;
	}

	.checkbox-input {
		width: 2rem;
		height: 2rem;
	}

	.checkbox-label {
		font-size: 1.3rem;
	}

	.create-event-btn {
		padding: 1.75rem;
		font-size: 1.4rem;
	}
}
</style>
