import Prismic from 'prismic-javascript'

export const state = () => ({
  footer: {},
  projects: {},
  navColor: "black",
  isOverlayHidden: false
});

export const mutations = {
  SET_FOOTER_DATA (state, data) {
    state.footer = data;
  },
  SET_PROJECTS_DATA (state, data) {
    state.projects = data;
  },
  CHANGE_NAV_COLOR (state, data) {
    state.navColor = data;
  },
  CHANGE_OVERLAY_STATE (state, data) {
    state.isOverlayHidden = data;
  },
  CHANGE_TACOS_AVAILABILITY (state, data) {
    state.tacos = data;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, { $prismic }) {
    const global = await $prismic.api.getSingle('global');
    const projects = await $prismic.api.query(Prismic.Predicates.at('document.type', 'project'));
    console.log(projects.results);
    commit('SET_FOOTER_DATA', global.data.footer[0].text);
    commit('SET_PROJECTS_DATA', projects.results);
  }
};
