<template>
  <div class="add-vehicle">
    <div class="page-header">
      <h1>{{ $route.name }}</h1>
      <div class="add-btn">
        <router-link class="btn custom-btn" class-active="" to="/car-list"
          >Back</router-link
        >
      </div>
    </div>
    <div class="add-form">
      <form-wizard shape="square" color="#18541d">
        <tab-content title="Individual parts">
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
                  label="Vehicle Type"
                  label-for="input-5"
                >
                  <b-form-input
                    id="input-5"
                    type="text"
                    placeholder="Vehicle Type"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-6"
                  label="Body Type"
                  label-for="input-6"
                >
                  <b-form-input
                    id="input-6"
                    type="text"
                    placeholder="Body Type"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-7"
                  label="No. Doors"
                  label-for="input-7"
                >
                  <b-form-input
                    id="input-7"
                    type="number"
                    placeholder="No. Doors"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-8"
                  label="Engine Name"
                  label-for="input-8"
                >
                  <b-form-input
                    id="input-8"
                    type="text"
                    placeholder="Engine Name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-9"
                  label="Engine ID"
                  label-for="input-9"
                >
                  <b-form-input
                    id="input-9"
                    type="text"
                    placeholder="Engine ID"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Country of Manuf."
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Country of Manuf."
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Transmission Id"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Transmission Id"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Trim"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Trim"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Color"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="color"
                    placeholder="Color"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Miles"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Miles"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Purchase Source"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Purchase Source"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Purchase Price"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Purchase Price"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="License Plate"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="License Plate"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-4 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Lic. Expiration"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    type="text"
                    placeholder="Lic. Expiration"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="col-lg-12 col-md-6 col-sm-12">
                <b-form-group
                  id="input-group-10"
                  label="Description Notes"
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
              <b-col class="col-sm-12">
                <div><span id="msg"></span></div>
                <div class="upload-images-wrapper row">
                  <div class="upload-images col-md-3">
                    <span class="mb-2 d-block"><b>Front</b> </span>
                    <b-form-group id="input-group-01" label-for="input-01">
                      <b-form-file
                        accept="image/*"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        @change="onFileChangeF"
                      ></b-form-file>
                    </b-form-group>
                    <div id="front" class="select-image"></div>
                  </div>

                  <div class="upload-images col-md-3">
                    <span class="mb-2 d-block"><b>Back</b> </span>
                    <b-form-group id="input-group-01" label-for="input-01">
                      <b-form-file
                        accept="image/*"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        @change="onFileChangeB"
                      ></b-form-file>
                    </b-form-group>
                    <div id="back" class="select-image"></div>
                  </div>

                  <div class="upload-images col-md-3">
                    <span class="mb-2 d-block"><b>Right</b> </span>
                    <b-form-group id="input-group-01" label-for="input-01">
                      <b-form-file
                        accept="image/*"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        @change="onFileChangeR"
                      ></b-form-file>
                    </b-form-group>
                    <div id="right" class="select-image"></div>
                  </div>

                  <div class="upload-images col-md-3">
                    <span class="mb-2 d-block"><b>Left</b> </span>
                    <b-form-group id="input-group-01" label-for="input-01">
                      <b-form-file
                        accept="image/*"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        @change="onFileChangeL"
                      ></b-form-file>
                    </b-form-group>
                    <div id="left" class="select-image"></div>
                  </div>
                </div>
              </b-col>
            </b-row>
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
      front: "",
      back: "",
      right: "",
      left: "",
    };
  },
  mounted() {},
   methods: {
    onFileChangeF(e) {
      $("#front").append("<img class='front' src='' alt=''>");
      const file = e.target.files[0];
      this.front = URL.createObjectURL(file);
      $(".front").attr("src", this.front);
    },
    onFileChangeR(e) {
      $("#right").append("<img class='right' src='' alt=''>");
      const file = e.target.files[0];
      this.right = URL.createObjectURL(file);
      $(".right").attr("src", this.right);
    },
    onFileChangeL(e) {
      $("#left").append("<img class='left' src='' alt=''>");
      const file = e.target.files[0];
      this.left = URL.createObjectURL(file);
      $(".left").attr("src", this.left);
    },
    onFileChangeB(e) {
      $("#back").append("<img class='back' src='' alt=''>");
      const file = e.target.files[0];
      this.back = URL.createObjectURL(file);
      $(".back").attr("src", this.back);
    },
  },
};
</script>
<style scoped>
#msg {
  color: brown;
}
</style>
