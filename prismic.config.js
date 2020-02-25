import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

const config = {
  baseUrl: 'https://leapradel-portfolio.cdn.prismic.io/api/v2',
};

export const initApi = req => {
  return Prismic.getApi(config.baseUrl, {
    req: req
  })
};

export const linkResolver = doc => {
  if (doc.type === 'projects') return `/projects/${doc.uid}`;
  return `/${doc.uid}`
};

export const generatePageData = (documentType, data) => {
  switch (documentType) {
    case 'homepage':
      return {
        description: PrismicDOM.RichText.asHtml(data.description),
        coordonnees: PrismicDOM.RichText.asHtml(data.coordonnees),
        socials: PrismicDOM.RichText.asHtml(data.socials),
        localisation: PrismicDOM.RichText.asHtml(data.localisation),
      };
    case 'project_page':
      return {
        projects: data,
      };

    case 'project':
      return {
        title: PrismicDOM.RichText.asText(data.name),
        type: PrismicDOM.RichText.asText(data.type),
        pitch: PrismicDOM.RichText.asText(data.pitch),
        solution: PrismicDOM.RichText.asText(data.pitch),
        year: PrismicDOM.RichText.asText(data.year),
        skills: PrismicDOM.RichText.asText(data.skills),
        background: data.background.url,
        color: data.color,
        phonemockup: data.phonemockup.url,
        deskmockup: data.deskmockup.url,
      }
  }
};
