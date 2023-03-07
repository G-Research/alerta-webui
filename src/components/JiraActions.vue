<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div v-if="attributesExist">
    <div v-if="noJiraAssigned">
      <v-card-text>
        <div class="flex xs12 ma-1">
          <div class="d-flex align-top">
            <div class="flex xs3 text-left">
              <div class="text-center">
                <v-menu offset>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      theme="dark"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Create Jira
                    </v-btn>
                  </template>
                  <v-list
                    v-for="(item, index) in assignees"
                    :key="index"
                  >
                    <div
                      v-if="item.user"
                      class="action-item"
                      @click="createJira(id, item)"
                    >
                      {{ item.project }} : {{ item.user }}
                    </div>
                    <div
                      v-else
                      class="action-item"
                      @click="createJira(id, item)"
                    >
                      {{ item.project }}
                    </div>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="flex">
              <div class="text-center">
                <v-btn
                  color="primary"
                  theme="dark"
                  @click="toggleAttachJira"
                >
                  Attach Jira
                </v-btn>
                <div v-if="show_attach">
                  <v-text-field v-model="jira_key" />
                  <v-btn
                    color="primary"
                    theme="dark"
                    @click="attachJira(id)"
                  >
                    Attach
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </div>
    <div v-else>
      <v-card-text>
        <div class="flex xs12 ma-1">
          <div class="d-flex align-top">
            <div class="flex xs3 text-left">
              <div class="text-center">
                <v-btn
                  color="primary"
                  theme="dark"
                  @click="detachJira(id)"
                >
                  Detach Jira
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </div>
  </div>
</template>
<script>

import debounce from 'lodash/debounce'

// added 'required: true' to remove compiler errors
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    attributes: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    jira_key: '',
    show_attach: false
  }),
  computed: {
    item() {
      return this.$store.state.alerts.alert
    },
    attributesExist() {
      return typeof this.attributes !== 'undefined'
    },
    noJiraAssigned() {
      return !('jira' in this.attributes)
    },
    assignees() {
      return this.$store.getters.getConfig('jira').assignees
    },
  },
  methods: {
    toggleAttachJira() {
      this.show_attach = !this.show_attach
    },
    getAlert() {
      this.$store.dispatch('alerts/getAlert', this.id)
    },
    createJira: debounce(function(id, assignee) {
      this.$store
        .dispatch('alerts/takeAction',
                  [id, 'createJira', JSON.stringify(assignee)])
        .then(() => this.getAlert(this.id))
    }, 200, {leading: true, trailing: false}),
    detachJira: debounce(function(id, assignee) {
      this.$store
        .dispatch('alerts/takeAction',
                  [id, 'detachJira', JSON.stringify(this.attributes['jira'])])
        .then(() => this.getAlert(this.id))
    }, 200, {leading: true, trailing: false}),
    attachJira: debounce(function(id) {
      this.toggleAttachJira()
      this.$store
        .dispatch('alerts/takeAction',
                  [id, 'attachJira', this.jira_key])
        .then(() => {
          this.getAlert(this.id)
          this.jira_key = ''
        })
    }, 200, {leading: true, trailing: false}),
  }
}
</script>

<style>
.action-item:hover {
  color: #3f51b5;
  cursor: pointer;
}
</style>
