import Prismic from 'prismic-javascript'

export const state = () => ({
  footer: {},
  projects: {},
  navColor: "black"
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
