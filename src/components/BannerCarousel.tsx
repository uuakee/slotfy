'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Card, CardCarousel, CardContent } from "./ui/card"
import Image from "next/image"


const banners = [

    { src: '/kvo01725629351192594.jpg', alt: 'Banner 1' },
    { src: '/ue5e1725594439975749.jpg', alt: 'Banner 2' },
]
export default function BannerCarousel() {
    const [api, setApi] = React.useState<any>()
    const autoplayPlugin = React.useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
        })
    )
    React.useEffect(() => {
        if (api) {
        api.on("pointerDown", () => {
            autoplayPlugin.current.stop()
        })

        api.on("pointerUp", () => {
            autoplayPlugin.current.reset()
            autoplayPlugin.current.play()
        })
        }
    }, [api])

    return (
        <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}>
            <CarouselContent>
                {banners.map((banner, index) => (
                <CarouselItem key={index}>
                    <div className="mt-2">
                    <CardCarousel className="">
                        <CardContent className="flex items-center justify-center p-0">
                        <Image
                            src={banner.src}
                            alt={banner.alt}
                            width={413}
                            height={151}
                            className="object-cover w-[413px] h-full rounded-lg"
                        />
                        </CardContent>
                    </CardCarousel>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}