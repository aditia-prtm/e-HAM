function getLoginPage(){
    return `
        <div class="bg-transparent backdrop-blur-xs rounded-xl border border-white p-10 min-w-96 w-1/3
                    flex flex-col justify-center items-center">
            <h1 class="font-bold text-5xl text-blue-800">Login</h1>
            <form action="" class="flex flex-col mt-16 h-full w-full gap-8">
                <div class="flex flex-col gap-1">
                    <label for="nik" class="text-blue-800">NIK</label>
                    <input type="text" id="nik" placeholder="Nomor Induk Kependudukan" class="outline-none border border-transparent border-b-white text-white">
                </div>
                <div class="flex flex-col gap-1">                    
                    <label for="password" class="text-blue-800">Password</label>
                    <input type="text" id="password" placeholder="Password" class="outline-none border border-transparent border-b-white text-white">
                </div>
            </form>
            <button class="mt-10 bg-blue-800 py-3 px-8 w-full text-white rounded-xl cursor-pointer font-semibold">LOGIN</button>
        </div>
    `;
}