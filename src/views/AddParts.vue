<template>
  <div class="add-vehicle">
    <div class="page-header">
      <h1>{{ $route.name }}</h1>
      <div class="add-btn">
        <router-link class="btn custom-btn" class-active="" to="/part-list"
          >Back</router-link
        >
      </div>
    </div>
    <div class="add-form">
      <form-wizard  shape="square" color="#18541d">
        <tab-content title="Individual parts">
          <b-form>
            <b-form-group id="input-group-1" label="Vin:" label-for="input-1">
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Vin"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Year:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="text"
                placeholder="Year"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Make:" label-for="input-3">
              <b-form-input
                id="input-3"
                type="text"
                placeholder="Make"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Modal:" label-for="input-4">
              <b-form-input
                id="input-4"
                type="text"
                placeholder="Modal"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="Vehical Type:"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                type="text"
                placeholder="Vehical Type"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="Body Type:"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                type="text"
                placeholder="Body Type"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-7"
              label="No Doors:"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                type="number"
                placeholder="No Doors"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-8"
              label="Engine Name:"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                type="number"
                placeholder="Engine Name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-9"
              label="Engine Id:"
              label-for="input-9"
            >
              <b-form-input
                id="input-9"
                type="number"
                placeholder="Engine Id"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-10"
              label="Country of Manu:"
              label-for="input-10"
            >
              <b-form-input
                id="input-10"
                type="number"
                placeholder="Country of Manu"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </tab-content>
        <tab-content title="Images">
          <b-form>
            <div><span id="msg"></span>
              </div>
            <span><b> Upload Images</b> (upto 8 images) </span>
            <div>
              <b-form-group
                v-for="(input, k) in inputs"
                :key="k"
                id="input-group-01"
                 :label="'Image'+(k+1)+':'"
                label-for="input-01"
              >
                <b-form-file
                multiple="true"
                accept="image/*"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                  @change="onFileChange"
                ></b-form-file>
              </b-form-group>
                  <div id="gallery">
                  </div>
            </div>
          </b-form>
         
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      inputs: [
        {
          file: "",
        },
      ],
      files_url:"",
      count:1,
    };
  },
  mounted() {},
  methods: {
  
    onFileChange(e) {
   $('#gallery').append("<img id='"+'file'+this.count+"' src='' alt='' style='width: 20%; height: 20%;'>");
      const file = e.target.files[0];
      this.files_url = URL.createObjectURL(file);
      $("#file"+this.count).attr("src",this.files_url);
      this.count +=1; 
    }
  }
};
</script>
<style scoped>
#msg {
  color: brown;
}
</style>
