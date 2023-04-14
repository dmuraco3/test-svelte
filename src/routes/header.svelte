<script lang="ts">
	import { each } from 'svelte/internal';
    let links = [
        {
            label: "Services",
            link: "/services",
        },
        {
            label: "Portfolio",
            link: "/portfolio",
        },
        {
            label: "Contact",
            link: "/contact"
        }
    ]
</script>

<nav class="my-12 mx-[75px] flex justify-between items-center">
    <a href="/">
        <img srcset={"/Logo.svg"} alt="testing"/>
    </a>
    <div class="flex space-x-8 ">
        {#each links as link (link.label)}
            <a class="text-lg hover:scale-110 transition-transform duration-300" href={link.link}>{link.label}</a>
        {/each}
    </div>
</nav>