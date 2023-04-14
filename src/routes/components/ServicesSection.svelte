<script lang="ts">
	import { writable } from "svelte/store";

    import {slide, fly, fade} from 'svelte/transition'
    import {flip} from 'svelte/animate'
    import {cubicInOut} from 'svelte/easing'


    let heroTitle="What We Offer"

    let heroDescription="Providing any web service you need. From design to implementation - we got you covered."

    let categories = ["Design", "Digital Marketing", "Development", "SEO"]

    type serviceListItem = {
        label: string,
        link: string
    }
    type service = {
        category: string,
        list: serviceListItem[]
    }
    
    let services: service[] = [
        {
            category: "Design",
            list: [
                {
                    label: "UI/UX Design",
                    link: "/"
                },
                {
                    label: "Web Design",
                    link: "/"
                },
                {
                    label: "Brand Design",
                    link: "/"
                },
                {
                    label: "Graphic Design",
                    link: "/"
                },
            ]
        },
        {
            category: "Digital Marketing",
            list: [
                {
                    label: "Instagram Marketing",
                    link: "/"
                },
                {
                    label: "Web Design",
                    link: "/"
                },
                {
                    label: "Brand Design",
                    link: "/"
                },
                {
                    label: "Graphic Design",
                    link: "/"
                },
            ]
        },
        {
            category: "Development",
            list: [
                {
                    label: "UI/UX Design",
                    link: "/"
                },
                {
                    label: "Web Design",
                    link: "/"
                },
                {
                    label: "Brand Design",
                    link: "/"
                },
                {
                    label: "Graphic Design",
                    link: "/"
                },
            ]
        },
        {
            category: "SEO",
            list: [
                {
                    label: "UI/UX Design",
                    link: "/"
                },
                {
                    label: "Web Design",
                    link: "/"
                },
                {
                    label: "Brand Design",
                    link: "/"
                },
                {
                    label: "Graphic Design",
                    link: "/"
                },
            ]
        },
    ]

    let currentCategory = writable(services[0].category)

    const chunk = (array: Array<any>, chunkSize: number) => {
        return Array.from({length: Math.ceil(array.length / chunkSize)}, (v,i) => array.slice(i * chunkSize, i * chunkSize + chunkSize))
    }

    function changeCategory(service: service) {
        currentCategory.update((_) => service.category)

    }

</script>

<section class="mx-[75px] mt-20">
    <div class="flex justify-between"> <!-- Top Section -->
        <div class="flex flex-col space-y-4"> <!-- Left Side -->
            <h1 class="text-5xl font-bold">
                {heroTitle}<span class="text-primary text-6xl">.</span>
            </h1>
            <h4 class="text-2xl font-medium max-w-[38ch] leading-9">
                {heroDescription}
            </h4>
        </div>

        <div class="flex flex-col space-y-4"> <!-- Service Category Selectors -->
            {#each chunk(services, 2) as serviceChunk, x}
                <div class="flex space-x-4 justify-end">
                    {#each serviceChunk as service, i (service.category)}
                        <button on:click={() => changeCategory(service)} class="space-x-2 flex items-center rounded-full border border-gray-500 px-6 py-4 h-fit w-fit">
                            <img width="35" src={"/icons/globe.svg"} alt="Globe Icon"/>
                            <span class="whitespace-nowrap">
                                {service.category}
                            </span>
                        </button>
                    {/each}
                </div>
            {/each}
        </div>

    </div>
    <div class="mt-20">
        <ul>
            {#each services.filter((service) => service.category == $currentCategory)[0].list as serviceItem, i ($currentCategory + serviceItem.label) }
                <li animate:flip| in:slide|local out:fade|local><a href={serviceItem.link} class="flex items-center justify-between py-20 {i==0 && "border-t"} border-b border-seasalt group">
                    <h4 class="text-5xl group-hover:scale-110 transition-transform duration-[450ms]">{serviceItem.label}</h4>
                    <img width="75" class="group-hover:scale-110 transition-transform duration-[450ms]" src="/icons/arrow_up_right.svg" alt="Arrow Up Right Icon"/>
                </a></li>
            {/each}
        </ul>
    </div>
</section>