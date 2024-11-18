import logos from "../../public/images/brands.png";
function BrandLogos() {
    return (
        <div className="relative overflow-hidden bg-gray-100">
            <div className="flex animate-marquee whitespace-nowrap">
                <img src={logos} alt="Brand Logos" className="mx-4 w-auto h-28" />
                <img src={logos} alt="Brand Logos" className="mx-4 w-auto h-28" />
                <img src={logos} alt="Brand Logos" className="mx-4 w-auto h-28" />
                <img src={logos} alt="Brand Logos" className="mx-4 w-auto h-28" />
            </div>
        </div>
    );
}

export default BrandLogos;
