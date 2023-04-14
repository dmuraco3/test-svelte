<script>
    import "../app.css"
    import Header from './header.svelte'
</script>

<div class="bg-charcoal flex flex-col min-h-screen">
    <Header />
    <div class="flex-1">
        <slot />

    </div>
</div>
