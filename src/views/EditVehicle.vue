<template>
     <div class="add-vehicle">
 <div class="page-header">
           <h1>{{ $route.name }}</h1>
          <div class="add-btn">
              <router-link  class="btn custom-btn" class-active="" to="/car-list">Back</router-link>
            </div>
          </div>
          <div class="add-form">
                 <b-form>
            <b-form-group
              id="input-group-1"
              label="Stock:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Stock"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Year Make Model:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="text"
                placeholder="Year Make Model"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="$Const:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                type="text"
                placeholder="Const"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Parts:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                type="text"
                placeholder="Parts"
                required
              ></b-form-input>
            </b-form-group>

             <b-form-group
              id="input-group-5"
              label="Parts Value:"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                type="text"
                placeholder="Parts Value"
                required
              ></b-form-input>
            </b-form-group>
            <div class="text-center mt-35">
              <b-button type="submit" class="custom-btn">Save</b-button>
            </div>
          </b-form>
          </div>
     </div>
</template>
<script>

export default {
   data(){
       return{
           items:'',
           id:'',
       }
   },
   mounted(){
       this.id= this.$route.params.id;
    this.items = localStorage.getItem('items');
    console.log(JSON.parse(this.items));
   }
};
</script>
