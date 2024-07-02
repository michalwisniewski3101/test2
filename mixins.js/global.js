
export default  {
    data() {
      return {
        dialog: false,
        dialogDelete: false,
        search1: '',
        search2: '',
        search3: '',
        editedIndex: -1,
        editedItemId:null,

        editedItem: {
            name: '',
            
          },
          defaultItem: {
            name: '',
            
          },
          deleteWarning: '',
          

      };
    },
    computed: {

      formTitle() {
        return this.editedIndex === -1 ? this.$t('app.addNew') : this.$t('app.edit');
      },

        

    },
    methods: {
        close() {
            this.dialog = false;
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem);
              this.editedIndex = -1;
            });
          },

          closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem);
              this.editedIndex = -1;
            });
          },

          

    },
    watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
    mounted() {
      
    },
  };
  
