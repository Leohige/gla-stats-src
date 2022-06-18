<template>
    <main class="flex-grow lg:px-8 px-4 py-6 sm:px-0 flex">
        <div class="max-w-7xl m-auto py-6 sm:px-6 lg:px-8 px-4 py-6 sm:px-0">
            <div class="px-4 mx-auto max-w-screen-xl lg:px-12 text-center">
                <h1 class="mb-4 text-4xl font-bold text-gray-900 lg:font-extrabold lg:text-6xl lg:leading-tight dark:text-white lg:text-center 2xl:px-30 lg:mb-8">Bem-vindo ao GLA Wiki!</h1>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-2xl xl:px-32">Disponibilizamos todos os tipos de informações relacionadas ao jogo.</p>
                <p class="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-2xl xl:px-32">Desenvolvido e mantido pelos jogadores desde 2022.</p>
                <div class="flex flex-col mb-8 md:flex-row justify-center">
                    <a
                        href="https://github.com/leohige/gla-wiki-src/"
                        target="_blank"
                        class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-3.5 text-center mb-3 md:mb-0 inline-flex items-center justify-center"
                    >
                        <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Contribuir
                    </a>
                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 sc:grid-cols-3 sc:gap-4 justify-items-center justify-between flex-grow">
                    <div class="max-w-sm shadow-lg rounded-sm shrink-0">
                        <a href="https://www.facebook.com/grandlineadventures" target="_blank">
                            <div class="flex flex-col h-full">
                                <!-- Card top -->
                                <div class="flex-grow p-5 bg-[#3360ff] cursor-pointer flex justify-between items-center">
                                    <!-- Image + name -->
                                    <div class="relative inline-flex mr-5">
                                        <img class="w-8 h-8" src="/src/assets/images/facebook.png" />
                                    </div>
                                    <div class="mr-5">
                                        <div class="flex items-center">
                                            <h2 class="text-md sm:text-lg leading-snug justify-center font-semibold text-white">Grand Line Adventures</h2>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-sm text-white -mt-0.5 mr-1">Acessar página!</span>
                                        </div>
                                    </div>
                                    <div class="text-white">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <!-- Card footer -->
                                <div class="bg-[#4133ff]">
                                    <div class="flex divide-x divide-gray-200r">
                                        <div class="block flex-1 text-center text-sm text-white font-medium px-3 py-4" href="#0">
                                            <div class="flex items-center justify-center">
                                                <span>PÁGINA OFICIAL DO JOGO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="max-w-sm shadow-lg rounded-sm shrink-0">
                        <a href="https://discord.com/invite/2ZhjWbR" target="_blank">
                            <div class="flex flex-col h-full">
                                <!-- Card top -->
                                <div class="flex-grow p-5 bg-[#5865F2] cursor-pointer flex justify-between items-center">
                                    <!-- Image + name -->
                                    <div class="relative inline-flex mr-5">
                                        <img class="w-8 h-8" src="/src/assets/images/discord.png" />
                                    </div>
                                    <div class="mr-5">
                                        <div class="flex items-center">
                                            <h2 class="text-md sm:text-lg leading-snug justify-center font-semibold text-white">Grand Line Adventures</h2>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-sm text-white -mt-0.5 mr-1">Entre no servidor!</span>
                                        </div>
                                    </div>
                                    <div class="text-white">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <!-- Card footer -->
                                <div class="bg-[#525ee0]">
                                    <div class="flex divide-x divide-gray-200r">
                                        <div class="block flex-1 text-center text-sm text-white font-medium px-3 py-4" href="#0">
                                            <div class="flex items-center justify-center">
                                                <span>DISCORD OFICIAL DO JOGO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="max-w-sm shadow-lg rounded-sm shrink-0">
                        <a href="https://www.instagram.com/grandlineadventures/" target="_blank">
                            <div class="flex flex-col h-full">
                                <!-- Card top -->
                                <div class="flex-grow p-5 bg-gradient-to-r from-fuchsia-800 via-red-700 to-yellow-500 cursor-pointer flex justify-between items-center">
                                    <!-- Image + name -->
                                    <div class="relative inline-flex mr-5">
                                        <img class="w-8 h-8" src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png" />
                                    </div>
                                    <div class="mr-5">
                                        <div class="flex items-center">
                                            <h2 class="text-md sm:text-lg leading-snug justify-center font-semibold text-white">Grand Line Adventures</h2>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-sm text-white -mt-0.5 mr-1">Acessar perfil!</span>
                                        </div>
                                    </div>
                                    <div class="text-white">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <!-- Card footer -->
                                <div class="bg-gradient-to-r from-fuchsia-900 via-red-800 to-yellow-600">
                                    <div class="flex divide-x divide-gray-200r">
                                        <div class="block flex-1 text-center text-sm text-white font-medium px-3 py-4" href="#0">
                                            <div class="flex items-center justify-center">
                                                <span>INSTAGRAM OFICIAL DO JOGO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>