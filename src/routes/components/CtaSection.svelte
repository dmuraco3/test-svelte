<script>
    let firstButton = {
        label: "Get a Free Consultation",
        link: "/contact"
    }
    let secondButtonText = "Our Recent Work"
    let secondButton = {
        label: "Our Recent Work",
        link: "#portfolio"
    }
</script>

<section class="flex space-x-16 mx-[75px] mt-20 items-center">
    <div class="rounded-full bg-gradient-to-r from-primary to-secondary p-[4px] flex items-center justify-center hover:scale-[115%] transition-all duration-300 hover:from-secondary hover:to-primary"> <!-- Primary CTA Button -->
        <a 
            href={firstButton.link}
            class="text-lg font-medium rounded-full text-center px-8 py-6 bg-charcoal w-full h-full"
        >
            {firstButton.label}
        </a>
    </div>

    <a
        href={secondButton.link}
        class="text-lg font-medium rounded-full text-center px-8 py-6 bg-charcoal border-2 border-gray-500 hover:scale-[115%] transition-transform duration-300"
    > <!-- Secondary CTA Button -->
        {secondButton.label}
    </a>

    <div class="flex-1"> <!-- Line Break -->
        <svg width="100%" height="10" viewBox="0 0 100% 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.09944e-06 4.49559C-0.0027723 6.70472 1.78584 8.49783 3.99497 8.50061C6.20411 8.50338 7.99722 6.71477 8 4.50564C8.00277 2.2965 6.21416 0.503389 4.00503 0.500613C1.79589 0.497838 0.0027785 2.28645 3.09944e-06 4.49559ZM795 5.49436C794.997 7.7035 796.786 9.49661 798.995 9.49939C801.204 9.50216 802.997 7.71355 803 5.50441C803.003 3.29528 801.214 1.50217 799.005 1.49939C796.796 1.49662 795.003 3.28523 795 5.49436ZM3.99906 5.25061L798.999 6.24939L799.001 4.74939L4.00094 3.75061L3.99906 5.25061Z" fill="#949494"/>
        </svg>
            
    </div>
        
</section>