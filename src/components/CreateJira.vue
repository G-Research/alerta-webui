<template>
  <div v-if="noJiraAssigned">
    <v-card-text>
      <div class="flex xs12 ma-1">
        <div class="d-flex align-top">
          <div class="flex xs3 text-xs-left">
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
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
                    class="action-item"
                    @click="createTicket(id, item)"
                  >
                    {{ item.project }} : {{ item.user }} 
                  </div>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </div>
</template>

<script lang="ts">

import debounce from 'lodash/debounce'
import i18n from '@/plugins/i18n'

export default {
  props: {
    id: {
      type: String,
    },
    attributes: {
      type: Object,
    }
  },
  methods: {
    getAlert() {
      this.$store.dispatch('alerts/getAlert', this.id)
    },
    createTicket: debounce(function(id, assignee) {
      this.$store
        .dispatch('alerts/takeAction', 
                  [id, 'createJira', JSON.stringify(assignee)])
        .then(() => this.getAlert(this.id))
    }, 200, {leading: true, trailing: false}),
  },
  computed: {
    noJiraAssigned() {
      if (typeof this.attributes !== 'undefined') {
        return !this.attributes.hasOwnProperty('jira')
      }
      return false
    },
    assignees() {
      // return this.$config.jira.assignees
      return this.$store.getters.getConfig('jira').assignees
    },
  },
}
</script>
