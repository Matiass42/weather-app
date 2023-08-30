/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["jsx", "js"],
    reactStrictMode: true,
    images: {
        domains: ['openweathermap.org'], // Agrega aquí el dominio de las imágenes permitido
    },

}

module.exports = nextConfig
