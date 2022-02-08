import Footer from '@/components/Footer.vue'
import CardHeader from '@/components/CardHeader.vue'

export default {
    components: {
        Footer,
        CardHeader
	}, 
    data: () => ({
        drawer: false,
        messages: 5,
        hover: false,
        
        labels: [
            '12am', '3am', '6am', '9am', '12pm','3pm','6pm', '9pm',
        ],

        value: [
            200, 675, 410, 390, 310, 460, 250, 240,
        ],
        links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],

    }),
    }