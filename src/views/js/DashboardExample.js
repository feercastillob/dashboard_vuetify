import draggable from 'vuedraggable'
import TableMaestro from '@/components/TableMaestro.vue'
import TableDetalle from '@/components/TableDetalle.vue'
import Draggable from '@/components/Draggable.vue'
import BottonNavigation from '@/components/BottonNavigation.vue'
import TableContextMenu from '@/components/TableContextMenu.vue'
import VueJson from '@/components/VueJson.vue'
import Chartist from '@/components/Chartist.vue'


export default {
  components: {
    draggable,
    TableDetalle,
    TableMaestro,
    Draggable,
    BottonNavigation,
    TableContextMenu,
    VueJson,
    Chartist,
  },
  data: () => ({
    tabs: null,
    dialog: false,
    dialogDelete: false,


    menu: [
      'Maestro-Detalle', 'Movimiento entre contenedores', 'Menú contextual', 'PDF, CSV, EXCEL', 'Vue-Chartist'
    ],
  
  }),

  
  }

