
<template>
  <div class="add-vehicle">
    <div class="page-header">
      <h1>{{ $route.name}}</h1>
      <div class="add-btn">
        <router-link class="btn custom-btn" class-active="" to="/car-list"
          >Back</router-link
        >
      </div>
    </div>
    <div class="add-form">
      <form-wizard shape="square" color="#18541d">
        <tab-content title="Individual parts">
          <h3>Add part to inventory From the following vehicle</h3>
          <b-form>
            <b-row>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-0"
                  label="Vin"
                  label-for="input-0"
                >
                  <b-form-input
                    id="input-0"
                    type="text"
                    placeholder="Vin"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-2"
                  label="Year"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Year"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-3"
                  label="Make"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    type="text"
                    placeholder="Make"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-4"
                  label="Modal"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    type="text"
                    placeholder="Modal"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-5"
                  label="Miles"
                  label-for="input-5"
                >
                  <b-form-input
                    id="input-5"
                    type="text"
                    placeholder="Miles"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-6"
                  label="Part Name"
                  label-for="input-6"
                >
                  <b-form-input
                    id="input-6"
                    type="text"
                    placeholder="Part Name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-7"
                  label="Recommented Sales $"
                  label-for="input-7"
                >
                  <b-form-input
                    id="input-7"
                    type="number"
                    placeholder="Recommended Sales $"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-8"
                  label="Part Grade"
                  label-for="input-8"
                >
                  <b-form-input
                    id="input-8"
                    type="text"
                    placeholder="Part Grade"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-9"
                  label="Part Number"
                  label-for="input-9"
                >
                  <b-form-input
                    id="input-9"
                    type="number"
                    placeholder="Part Number"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Warranty"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="number"
                    placeholder="Warranty"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-8 col-md-6 col-sm-12">
                <b-form-group
                  id="opacity-0"
                  label="Do you want to expose your parts into these outlets?"
                  label-for="input-10"
                >
                  <b-form-group
                    label="Do you want to expose your parts into these outlets?"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-checkbox-group
                      id="checkbox-group-1"
                      v-model="selected"
                      :options="options"
                      :aria-describedby="ariaDescribedby"
                      name="flavour-1"
                    ></b-form-checkbox-group>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-12 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Description"
                  label-for="input-10"
                >
                  <b-form-textarea
                    id="textarea"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </tab-content>
        <tab-content title="Images">
          <b-form>
            <b-row>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <div><span id="msg"></span></div>
                <span class="mb-2 d-block"
                  ><b> Upload Images</b> (upto 8 images)
                </span>
                <b-form-group
                  v-for="(input, k) in inputs"
                  :key="k"
                  id="input-group-01"
                  label-for="input-01"
                >
                  <b-form-file
                    multiple
                    accept="image/*"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    @change="onFileChange"
                  ></b-form-file>
                </b-form-group>
              </b-col>
            </b-row>

            <div id="gallery"></div>
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
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
      inputs: [
        {
          file: "",
        },
      ],
      files_url: "",
      count: 1,
    };
  },
  mounted() {},
  methods: {
    onFileChange(e) {
      $("#gallery").append(
        "<img id='" + "file" + this.count + "' src='' alt=''>"
      );
      const file = e.target.files[0];
      this.files_url = URL.createObjectURL(file);
      $("#file" + this.count).attr("src", this.files_url);
      this.count += 1;
    },
  },
};
</script>
<style scoped>
#msg {
  color: brown;
}
</style>
