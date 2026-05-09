const navbar = document.getElementById('navbar');
navbar.className = "bg-white/95 flex md:justify-between justify-center px-16 py-3 items-center gap-8";

navbar.innerHTML = `
        <div class="md:flex hidden">
            <img src="assets/icon/Gemini_Generated_Image_w66ikqw66ikqw66i.png" alt="e-HAM" class="w-12">
        </div>
        <div class="flex lg:gap-10 md:gap-7 gap-4 h-full px-5 text-blue-800 font-semibold">
            <a href="#" class="py-4">Home</a>
            <a href="#" class="py-4">Tentang</a>
            <a href="#" class="py-4">Prosedur</a>
            <a href="#" class="py-4">Statistik</a>
            <a href="#" class="py-4">Bantuan</a>
        </div>`;