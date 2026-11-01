import { CaseStudyFlipStack } from "@/components/ui/case-study-flip-stack"

export default function WorkPage() {
  return (
    <CaseStudyFlipStack
      items={[
        {
          eyebrow: "Our Product",
          title: " Best Shops , Best Quality ",
          description: "You Can Add our product and Request to Deliver",
          image: "https://plus.unsplash.com/premium_photo-1755164641235-d57118bbc1ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
          imageAlt: "Portrait from the fintech campaign",
          background: "#EEE5E9",
          foreground: "#201D1F",
          link: "basket",
        },
        {
          eyebrow: "History of Product",
          title: " Do you Remember Our Product ?  ",
          description: " Check What U Wanna From Past !   ",
          image: "https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
          imageAlt: "A mountain retreat at dusk",
          background: "#D3E7E9",
          foreground: "##201D1F",
          link: "history"
        },
        {
          eyebrow: "Notif & Massages",
          title: " Ding Ding , Check Your Notif Now !  ",
          description: " There are Important Things Right There ",
          image: "https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
          imageAlt: "A mountain retreat at dusk",
          background: "#E1ADAD",
          foreground: "##201D1F",
          link: "history"
        },
        {
          eyebrow: "Delverence",
          title: " Fast Delivery, Reliable Delivery  ",
          description: "A cinematic booking journey with a stronger sense of place.",
          image: "https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
          imageAlt: "A mountain retreat at dusk",
          background: "#DDC4CF",
          foreground: "#201D1F",
          link: "calendar"
        },
        
      ]}
    />
  )
}