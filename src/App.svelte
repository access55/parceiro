<script>
	import Nav from './components/Nav.svelte';

	let refereeName = "s";
	let isSpanish = false;
	let base = 'https://apply.a55.tech/';

	$: defaultUrl = `${base}?referee=${encodeURI(refereeName)}`;
	$: spanishUrl = `${base}mexico/?referee=${encodeURI(refereeName)}`;
	$: finalUrl = isSpanish ? spanishUrl : defaultUrl;
</script>

<style src="./main.css">
	.refereer {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	main {
		display: flex;
		flex-flow: row wrap;
		width: 100%;
		padding-top: 92px;
	}

	@media only screen and (min-width: 760px) {
		main {
			margin: 0 auto 100px;
			max-width: 760px;
		}
	}

	main > h2 {
		color: var(--primary);
		font-size: 28px;
		margin-bottom: 40px;
	}

	main > label {
		display: block;
		width: 100%;
		font-size: 14px;
		color: var(--grey2);
		margin-bottom: 20px;
	}
	main > label > b {
		font-weight: 600;
	}

	main input[type="checkbox"] {
		position: relative;
		top: -1px;
	}

	main input[type="text"] {
		display: block;
		width: 300px;
		height: 28px;
		font-size: 14px;
		text-indent: 10px;

	}

	main b {
		line-height: 24px;
	}

	.result {
		font-size: 22px;
		color: var(--grey2)
	}

	:global(.--copied small)::after {
		opacity: 0 !important;
	}

	:global(.--copied small)::before {
		opacity: 1 !important;
	}

	.result > small {
		text-transform: uppercase;
		position: relative;
		height: 28px;
		line-height: 30px;
		font-size: 13px;
		margin-left: 15px;
	}

	.result > small::after,
	.result > small::before {
		position: absolute;
		top: -1px;
		left: 4px;
		white-space: nowrap;
		text-decoration: underline;
		cursor: pointer;
		color: var(--primary);
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.result > small::after {
		content: 'copiar url';
		opacity: 1;
	}
	.result > small::before {
		content: 'copiado!';
		opacity: 0;
	}
	.result {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
	}
</style>

<div class="refereer">
 	<Nav
	 	website="https://a55.tech"
	 	logo="https://a55-cdn.s3-sa-east-1.amazonaws.com/I%CC%81CONE+E+LOGO/LOGO/A55_BRANCO.png">
	</Nav>
	<main>
		<h2>Criar link de indicação</h2>
		<label>
			<b>Seu nome ou como vc quer ser identificado:</b>
			<input
				placeholder="Nome do parceiro"
				type="text"
				bind:value={refereeName} >
		</label>
		<label>
			<input type="checkbox" bind:checked={isSpanish}>
			<b>Deseja enviar o formulário em espanhol?</b>
		</label>
		<div class="result">
			<input
				disabled
				type="text"
				bind:value={finalUrl}>
			{#if refereeName.length}
				<small data-clipboard-text={finalUrl} class="clipboard" />
			{/if}
		</div>
	</main>
</div>
