import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'PANNEAU D\'ADMINISTRATION',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'FORMATIONS',
    url: '/formation',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Formations',
        url: '/formation/nouvelle-formation',
        icon: 'icon-puzzle'
      },
      {
        name: 'Voir les Formations',
        url: '/formation/liste-formation',
        icon: 'icon-briefcase'

      },
      {
        name: 'Certificat',
        url: '/formation/nouveau-certificat',
        icon: 'icon-briefcase'
      },
      {
        name: 'Voir les Certificats',
        url: '/formation/liste-certificat',
        icon: 'icon-briefcase'
      }

    ]
  },
  {
    name: 'FILIERES',
    url: '/filieres',
    icon: 'icon-suitcase',
    children: [
      {
        name: 'A jouter une filière',
        url: '/filieres/nouvelle-filiere',
        icon: 'icon-suitcase'
      },
      {
        name: 'Voir les filières',
        url: '/filieres/liste-filieres',
        icon: 'icon-suitcase'
      },

    ]
  },
  {
    name: 'NIVEAUX',
    url: '/niveau',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'A jouter un niveau',
        url: '/niveau/nouveau-niveau',
        icon: 'icon-puzzle'
      },
      {
        name: 'Voir les niveaux',
        url: '/niveau/liste-niveaux',
        icon: 'icon-briefcase'
      },

    ]
  },
  {
    name: 'CONDITION',
    url: '/CONDITION',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'A jouter une condition',
        url: '/condition/nouvelle-condition',
        icon: 'icon-puzzle'
      },
      {
        name: 'Voir les Conditions',
        url: '/niveau/liste-condition',
        icon: 'icon-briefcase'
      },

    ]
  },
  {
    name: 'MATIERES',
    url: '/matiere',
    icon: 'icon-briefcase',
    children: [
      {
        name: 'A jouter un niveau',
        url: '/matiere/nouvelle-matiere',
        icon: 'icon-briefcase'
      },
      {
        name: 'Voir les Matières',
        url: '/matiere/liste-matieres',
        icon: 'icon-briefcase'
      },

    ]
  },
  {
    name: 'SEMESTRE',
    url: '/semestre',
    icon: 'icon-briefcase',
    children: [
      {
        name: 'A jouter un semestre',
        url: '/semestre/nouveau-semestre',
        icon: 'icon-briefcase'
      },
      {
        name: 'Voir les Semestre',
        url: '/semestre/liste-semestres',
        icon: 'icon-briefcase'
      },

    ]
  },
  
  {
    name: 'IPIMD',
    url: 'http://ipimd.pro/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'IPIMD EDUCATION',
    url: 'http://ipimd.pro/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
