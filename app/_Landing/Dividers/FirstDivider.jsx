import Image from 'next/image';
import '../landing.css';
import Link from 'next/link';

export default function FirstDivider() {
    return (
        <div className="w-full min-h-[50vh] bg-black p-5 md:p-10">
            {/* Sezione servizi */}
            <div className="grid grid-cols-3 gap-10 text-white">

                {/* LOCATION */}
                <div className="col-span-3 md:col-span-1 flex flex-col items-center text-center">
                    <Image
                        src="/media/photoLocation/Photo2.jpg"
                        alt="Location Kyoto Sushi"
                        width={250}
                        height={250}
                        className="rounded-xl shadow-lg mb-6 object-cover h-[200px] w-[250px]"
                    />
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
                        A la carte
                    </h3>
                    <p className="text-sm md:text-base font-text mb-6 px-3 md:px-0 leading-relaxed">
                        Un ambiente elegante e accogliente nel cuore della città, dove l’atmosfera orientale incontra la modernità. Perfetto per una cena romantica o una serata tra amici.
                    </p>
                    <Link
                        href="/location"
                        className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition-colors"                    >
                        Prenota un tavolo
                    </Link>
                </div>

                {/* SERVIZI */}
                <div className="col-span-3 md:col-span-1 flex flex-col items-center text-center">
                    <Image
                        src="/media/services/catering.jpg"
                        alt="Servizi Kyoto Sushi"
                        width={250}
                        height={250}
                        className="rounded-xl shadow-lg mb-6 object-cover h-[200px] w-[250px]"
                    />
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
                        All You Can Eat
                    </h3>
                    <p className="text-sm md:text-base font-text mb-6 px-3 md:px-0 leading-relaxed">
                        Offriamo servizio catering per eventi, ordini take-away e delivery. La qualità del nostro sushi arriva ovunque, con la stessa cura e freschezza del ristorante.
                    </p>
                    <Link
                        href="/servizi"
                        className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition-colors"                    >
                        Prenota un tavolo
                    </Link>
                </div>

                {/* PROMOZIONI */}
                <div className="col-span-3 md:col-span-1 flex flex-col items-center text-center">
                    <Image
                        src="/media/ayce.jpg"
                        alt="Promozioni Kyoto Sushi"
                        width={250}
                        height={250}
                        className="rounded-xl shadow-lg mb-6 object-cover h-[200px] w-[250px]"
                    />
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
                        Eventi
                    </h3>
                    <p className="text-sm md:text-base font-text mb-6 px-3 md:px-0 leading-relaxed">
                        Approfitta delle nostre offerte All You Can Eat e delle promozioni stagionali. Gusta il meglio del sushi a un prezzo speciale, senza rinunciare alla qualità.
                    </p>
                    <Link
                        href="/promozioni"
                        className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition-colors"                    >
                        Contattci per il tuo evento
                    </Link>
                </div>

            </div>
        </div>
    );
}
