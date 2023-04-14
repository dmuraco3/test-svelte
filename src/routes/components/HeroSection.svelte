<script>
    let heroTitle = "Propel Your Business"

    let heroDescription = "The art of visual communication, creatively impacting the world around us - one good design at a time, design like you mean it!"
</script>

<section class="grid grid-cols-2 mx-[75px] mt-20"> <!-- Hero Section -->
        <div> <!-- Left Side Hero Section -->
            <h1 class="text-[96px] font-secondary font-black" >{heroTitle}</h1>
        </div>

        <div class="flex flex-col justify-between"> <!-- Right Side Hero Section -->
            <div class=" self-center heroPlayContainer rounded-full w-3/4 max-w-[500px] h-fit p-2"> <!-- Play Container -->
                <button class="h-[90px] w-[90px] rounded-full bg-primary flex items-center justify-center">
                    <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.349365L38 22L0.500001 43.6506L0.5 0.349365Z" fill="#FAFAFA"/>
                    </svg>
                </button>
            </div>

            <h3 class="text-3xl max-w-[40ch]"> <!-- Hero Description-->
                {heroDescription}
            </h3>
        </div>
</section>

<style>
    .heroPlayContainer {
        background-image: url(/marbleBackground.png);
    }
</style>