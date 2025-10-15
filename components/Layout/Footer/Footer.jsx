import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="min-h-[50vh] bg-white/90 text-white" id="footerContatti">
            <div className="container mx-auto px-6 py-16">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-around">
                            <Image src="/media/logoDemoSushinobg.png" alt="Logo" width={100} height={100} />
                        </div>
                        <p className="text-black leading-relaxed text-center font-semibold">
                            Vivi un’autentica esperienza culinaria giapponese nel cuore della città. Ogni piatto è preparato con ingredienti freschissimi e selezionati con cura, rispettando la tradizione e l’arte del sushi. Dal delicato sapore del pesce crudo alle perfette combinazioni di riso e condimenti, ogni boccone racconta la passione e la maestria dei nostri chef, offrendoti un viaggio gastronomico unico e indimenticabile.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-4 pt-4 w-full items-center justify-center ">
                            {/* Facebook */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-5 h-5 fill-gray-600 group-hover:fill-white transition-colors"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:border-transparent transition-all group"
                                aria-label="Instagram"
                            >
                                <svg
                                    className="w-5 h-5 fill-gray-600 group-hover:fill-white transition-colors"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all group"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    className="w-5 h-5 fill-gray-600 group-hover:fill-white transition-colors"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* CONTATTI */}
                    <div className="space-y-4 flex flex-col justify-content-center items-center gap-4 ">
                        <h3 className="text-5xl font-serif text-black mb-6 pb-3">Contatti</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-black">Indirizzo</p>
                                    <p className="text-lg text-black font-medium">Via Roma 123</p>
                                    <p className="text-lg text-black font-medium">20100 Milano, Italia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-black">Telefono</p>
                                    <p className="text-lg text-black font-medium">+39 02 1234 5678</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-black">Email</p>
                                    <p className="text-lg text-black font-medium">info@sakurasushi.it</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="w-full h-96 mt-6">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.123456789!2d9.189!3d45.464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a1b1c2d3e7%3A0xabcdef1234567890!2sVia+Roma+123%2C+20100+Milano%2C+Italia!5e0!3m2!1sit!2sit!4v1690000000000!5m2!1sit!2sit"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* offerte */}
                    <div className="space-y-4 flex flex-col gap-4 items-center justify-center">
                        <h3 className="text-5xl font-serif text-black mb-6 pb-3">Offerte speciali</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="col-span-2 md:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden text-center">
                                <Image src="/media/footerImageAllyoucaneat.jpg" width={250} height={250} alt="All You Can Eat" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-black mb-2">All You Can Eat</h4>
                                    <p className="text-gray-700 text-sm">Dal martedì al giovedì - 25€ a persona</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-span-2 md:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden text-center">
                                <Image src="/media/footerFreshSashimi.jpg" width={250} height={250} alt="Sashimi Fresco" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-black mb-2">🥢 Sashimi Fresco</h4>
                                    <p className="text-gray-700 text-sm">Ogni venerdì - Selezione di stagione</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-span-2 bg-white rounded-lg shadow-lg overflow-hidden text-center">
                                <Image src="/media/foodDelivery.jpg" width={250} height={250} alt="Menù Famiglia" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-black mb-2">Asporto</h4>
                                    <p className="text-gray-700 text-sm">Di noi puoi chieder d'asporto! Contattaci per ordinare!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 bg-black/80 w-full min-h-[3.5rem]">
                <p>© 2025 Sakura Sushi. Tutti i diritti riservati.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-red-500 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-red-500 transition-colors">
                        Cookie Policy
                    </a>
                    <a href="#" className="hover:text-red-500 transition-colors">
                        Termini e Condizioni
                    </a>
                </div>
            </div>
        </footer>
    )
}
