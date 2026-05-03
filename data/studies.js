const STUDIES_DATA = [
  {
    "id": "currano_vamos_2018",
    "display_label": "Currano et al. (2018)",
    "title": "¡Vamos!: observations of pedestrian interactions with driverless cars in Mexico",
    "authors_full": "Currano, Rebecca and Park, So Yeon and Domingo, Lawrence and Garcia-Mancilla, Jesus and Santana-Mancilla, Pedro C. and Gonzalez, Victor M. and Ju, Wendy",
    "authors_short": "Currano et al.",
    "venue": "Proceedings of the 10th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2018",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "142 participants",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "shared space | (parking lot entrance)",
    "scenario_types": [
      "shared"
    ],
    "criticality": "unable to control, mentioned interaction timing as a challenge",
    "model_rows": [
      {
        "input_factors": "cultural difference",
        "behavior_indicators": "crossing decision, walking behavior, crossing pathways, glancing behavior",
        "behavioral_model": "statistic description, chi-square test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "cultural difference",
    "behavior_indicators": "crossing decision, walking behavior, crossing pathways, glancing behavior",
    "behavioral_model": "statistic description, chi-square test"
  },
  {
    "id": "rodriguez_palmeiro_interaction_2018",
    "display_label": "Rodríguez Palmeiro et al. (2018)",
    "title": "Interaction between pedestrians and automated vehicles: a Wizard of Oz experiment",
    "authors_full": "Rodríguez Palmeiro, Ana and van der Kint, Sander and Vissers, Luuk and Farah, Haneen and de Winter, Joost C. F. and Hagenzieker, Marjan",
    "authors_short": "Rodríguez Palmeiro et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2018",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "24 participants | 480 trials/decisions",
    "road_users_raw": "1 ped-1 AV | 1 ped-1 HDV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "vehicle condition, vehicle behavior, approach direction",
        "behavior_indicators": "critical gap size, critical gap distance, stress level",
        "behavioral_model": "one-way repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle condition, vehicle behavior, approach direction",
    "behavior_indicators": "critical gap size, critical gap distance, stress level",
    "behavioral_model": "one-way repeated measures ANOVA"
  },
  {
    "id": "woodman_gap_2019",
    "display_label": "Woodman et al. (2019)",
    "title": "Gap acceptance study of pedestrians crossing between platooning autonomous vehicles in a virtual environment",
    "authors_full": "Woodman, Roger and Lu, Ke and Higgins, Matthew D. and Brewerton, Simon and Jennings, Paul A. and Birrell, Stewart",
    "authors_short": "Woodman et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "28 participants | 896 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road | shared space on pavement",
    "scenario_types": [
      "shared",
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "vehicle speed, temporal gap size, experiment scenario",
        "behavior_indicators": "willingness to cross",
        "behavioral_model": "statistic description, McNemar's test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle speed, temporal gap size, experiment scenario",
    "behavior_indicators": "willingness to cross",
    "behavioral_model": "statistic description, McNemar's test"
  },
  {
    "id": "de_clercq_external_2019",
    "display_label": "De Clercq et al. (2019)",
    "title": "External human-machine interfaces on automated vehicles: effects on pedestrian crossing decisions",
    "authors_full": "De Clercq, Koen and Dietrich, Andre and Núñez Velasco, Juan Pablo and de Winter, Joost and Happee, Riender",
    "authors_short": "De Clercq et al.",
    "venue": "Human Factors",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "28 participants | 2520 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "vehicle size, eHMI type, eHMI timing",
        "behavior_indicators": "feeling safe percentage",
        "behavioral_model": "three-way ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle size, eHMI type, eHMI timing",
    "behavior_indicators": "feeling safe percentage",
    "behavioral_model": "three-way ANOVA"
  },
  {
    "id": "mahadevan_av-pedestrian_2019",
    "display_label": "Mahadevan et al. (2019)",
    "title": "AV-pedestrian interaction design using a pedestrian mixed traffic simulator",
    "authors_full": "Mahadevan, Karthik and Sanoubari, Elaheh and Somanath, Sowmya and Young, James E. and Sharlin, Ehud",
    "authors_short": "Mahadevan et al.",
    "venue": "Proceedings of the 2019 on Designing Interactive Systems Conference",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "12 participants | 1080 trials/decisions",
    "road_users_raw": "multi peds-multi AVs | (CG agents) (mixed env)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-way two-lane unsignalized crosswalk",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "autonomy combination, virtual pedestrian behavior, interface type, AV behavior",
        "behavior_indicators": "crossing decision",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "autonomy combination, virtual pedestrian behavior, interface type, AV behavior",
    "behavior_indicators": "crossing decision",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "chung_effects_2020",
    "display_label": "Chung et al. (2020)",
    "title": "Effects of initial starting distance and gap characteristics on children’s and young adults’ velocity regulation when intercepting moving gaps",
    "authors_full": "Chung, Hyun Chae and Choi, Gyoojae and Azam, Muhammad",
    "authors_short": "Chung et al.",
    "venue": "Human Factors",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "32 participants | 768 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "initial distance, gap size, vehicle size",
        "behavior_indicators": "mean position, velocity, gap entry time, time of interception",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "initial distance, gap size, vehicle size",
    "behavior_indicators": "mean position, velocity, gap entry time, time of interception",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "wang_roles_2020",
    "display_label": "Wang et al. (2020)",
    "title": "Roles of individual differences and traffic environment factors on children's street-crossing behaviour in a VR environment",
    "authors_full": "Wang, Huarong and Gao, Zhan and Shen, Ting and Li, Fei and Xu, Jie and Schwebel, David C.",
    "authors_short": "Wang et al.",
    "venue": "Injury Prevention",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "120 participants | 1212 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "unsignalized zebra intersection",
    "scenario_types": [
      "intersection",
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "gender, sensation seeking level, inter-vehicle distance, vehicle speed",
        "behavior_indicators": "dangerous crossing, missed opportunities, crossing initiation time, number of running",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "gender, sensation seeking level, inter-vehicle distance, vehicle speed",
    "behavior_indicators": "dangerous crossing, missed opportunities, crossing initiation time, number of running",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "joisten_displaying_2020",
    "display_label": "Joisten et al. (2020)",
    "title": "Displaying vehicle driving mode – effects on pedestrian behavior and perceived safety",
    "authors_full": "Joisten, Philip and Alexandi, Emanuel and Drews, Robin and Klassen, Liane and Petersohn, Patrick and Pick, Alexander and Schwindt, Sarah and Abendroth, Bettina",
    "authors_short": "Joisten et al.",
    "venue": "Human Systems Engineering and Design II",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "28 participants",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "unsignalized crossing",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "vehicle condition",
        "behavior_indicators": "critical gap acceptance, perceived safety",
        "behavioral_model": "dependent t-test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle condition",
    "behavior_indicators": "critical gap acceptance, perceived safety",
    "behavioral_model": "dependent t-test"
  },
  {
    "id": "dietrich_implicit_2020",
    "display_label": "Dietrich et al. (2020)",
    "title": "Implicit communication of automated vehicles in urban scenarios: effects of pitch and deceleration on pedestrian crossing behavior",
    "authors_full": "Dietrich, André and Maruhn, Philipp and Schwarze, Lasse and Bengler, Klaus",
    "authors_short": "Dietrich et al.",
    "venue": "Advances in Intelligent Systems and Computing",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "30 participants | 1440 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane street",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "only safe interaction",
    "model_rows": [
      {
        "input_factors": "braking strategy, pitch strategy",
        "behavior_indicators": "crossing initiation time to vehicle stop",
        "behavioral_model": "repeated-measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "braking strategy, pitch strategy",
    "behavior_indicators": "crossing initiation time to vehicle stop",
    "behavioral_model": "repeated-measures ANOVA"
  },
  {
    "id": "colley_effects_2022",
    "display_label": "Colley et al. (2022)",
    "title": "Effects of pedestrian behavior, time pressure, and repeated exposure on crossing decisions in front of automated vehicles equipped with external communication",
    "authors_full": "Colley, Mark and Bajrovic, Elvedin and Rukzio, Enrico",
    "authors_short": "Colley et al.",
    "venue": "CHI Conference on Human Factors in Computing Systems",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "18 participants | 522 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "within-subject design: | - time pressure: timer, no timer",
    "model_rows": [
      {
        "input_factors": "another pedestrian presence, perceived time pressure, past experience, eHMI design",
        "behavior_indicators": "number of collision, crossing duration",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "another pedestrian presence, perceived time pressure, past experience, eHMI design",
    "behavior_indicators": "number of collision, crossing duration",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "lee_learning_2022",
    "display_label": "Lee et al. (2022)",
    "title": "Learning to interpret novel eHMI: the effect of vehicle kinematics and eHMI familiarity on pedestrian’ crossing behavior",
    "authors_full": "Lee, Yee Mun and Madigan, Ruth and Uzondu, Chinebuli and Garcia, Jorge and Romano, Richard and Markkula, Gustav and Merat, Natasha",
    "authors_short": "Lee et al.",
    "venue": "Journal of Safety Research",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "40 participants | 5691 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra street",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "eHMI design, time gap, AV speed, AV behavior, experimental trial",
        "behavior_indicators": "perceived safety, perceived safety change, crossing initiation time, crossing initiation time change",
        "behavioral_model": "mixed ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "eHMI design, time gap, AV speed, AV behavior, experimental trial",
    "behavior_indicators": "perceived safety, perceived safety change, crossing initiation time, crossing initiation time change",
    "behavioral_model": "mixed ANOVA"
  },
  {
    "id": "andrijanto_application_2022",
    "display_label": "Andrijanto et al. (2022)",
    "title": "Application of LargeSpace for investigating pedestrians' behaviors when interacting with autonomous vehicles in shared spaces",
    "authors_full": "Andrijanto, Andrijanto and Chen, Zhangyijing and Kodama, Takuro and Yano, Hiroaki and Itoh, Makoto",
    "authors_short": "Andrijanto et al.",
    "venue": "Proceedings - 2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops, VRW 2022",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "19 participants",
    "road_users_raw": "1 ped-1 pod",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × Shuttle",
        "cssClass": "ru-ped-shuttle"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "shared space (with predefined interaction types: same, perpendicular, opposite)",
    "scenario_types": [
      "shared"
    ],
    "criticality": "non-yield cases",
    "model_rows": [
      {
        "input_factors": "gender, different predefined path",
        "behavior_indicators": "traveling time, waiting time, distance to collision point, deflection angle",
        "behavioral_model": "statistic description",
        "model_family": "statistics"
      }
    ],
    "input_factors": "gender, different predefined path",
    "behavior_indicators": "traveling time, waiting time, distance to collision point, deflection angle",
    "behavioral_model": "statistic description"
  },
  {
    "id": "tapiro_cell_2016",
    "display_label": "Tapiro et al. (2016)",
    "title": "Cell phone conversations and child pedestrian’s crossing behavior: a simulator study",
    "authors_full": "Tapiro, Hagai and Oron-Gilad, Tal and Parmet, Yisrael",
    "authors_short": "Tapiro et al.",
    "venue": "Safety Science",
    "year": "2016",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "52 participants | 416 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane two-way unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles, but at least one safe crossing gap > 12s | under distraction",
    "model_rows": [
      {
        "input_factors": "age group, cell phone distraction, age group*cell phone distraction",
        "behavior_indicators": "safety margin, crossing performance, crossing initiation time, response time, visual attention distribution",
        "behavioral_model": "GLMM, | Dirichlet regression",
        "model_family": "linear"
      }
    ],
    "input_factors": "age group, cell phone distraction, age group*cell phone distraction",
    "behavior_indicators": "safety margin, crossing performance, crossing initiation time, response time, visual attention distribution",
    "behavioral_model": "GLMM, | Dirichlet regression"
  },
  {
    "id": "hollander_investigating_2019",
    "display_label": "Holländer et al. (2019)",
    "title": "Investigating the influence of external car displays on pedestrians' crossing behavior in virtual reality",
    "authors_full": "Holländer, Kai and Colley, Ashley and Mai, Christian and Häkkilä, Jonna and Alt, Florian and Pfleging, Bastian",
    "authors_short": "Holländer et al.",
    "venue": "Proceedings of the 21st International Conference on Human-Computer Interaction with Mobile Devices and Services",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "32 participants | 512 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "eHMI condition, AV behavior, interaction direction",
        "behavior_indicators": "gap distance, crossing initiation time",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "eHMI condition, AV behavior, interaction direction",
    "behavior_indicators": "gap distance, crossing initiation time",
    "behavioral_model": "LMM"
  },
  {
    "id": "nunez_velasco_studying_2019",
    "display_label": "Nuñez Velasco et al. (2019)",
    "title": "Studying pedestrians’ crossing behavior when interacting with automated vehicles using virtual reality",
    "authors_full": "Nuñez Velasco, J. Pablo and Farah, Haneen and van Arem, Bart and Hagenzieker, Marjan P.",
    "authors_short": "Nuñez Velasco et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "55 participants | 1735 trials/decisions",
    "road_users_raw": "1 ped - 1 shuttle",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × Shuttle",
        "cssClass": "ru-ped-shuttle"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "one-lane unsignalized road | (compare zebra and non-zebra)",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "vehicle type, vehicle speed, crossing facility, gap size, trust in automation, communication designs, whether recognize AV, perceived behavioral control",
        "behavior_indicators": "crossing intention",
        "behavioral_model": "mixed binomial logistic regression",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "vehicle type, vehicle speed, crossing facility, gap size, trust in automation, communication designs, whether recognize AV, perceived behavioral control",
    "behavior_indicators": "crossing intention",
    "behavioral_model": "mixed binomial logistic regression"
  },
  {
    "id": "ackermans_effects_2020",
    "display_label": "Ackermans et al. (2020)",
    "title": "The effects of explicit intention communication, conspicuous sensors, and pedestrian attitude in interactions with automated vehicles",
    "authors_full": "Ackermans, Sander and Dey, Debargha and Ruijten, Peter and Cuijpers, Raymond H. and Pfleging, Bastian",
    "authors_short": "Ackermans et al.",
    "venue": "Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "64 participants | 5120 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "eHMI and sensor manipulation, attitudes towards AVs, interaction terms",
        "behavior_indicators": "willingness to cross | unsafe distance, safe distance",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "eHMI and sensor manipulation, attitudes towards AVs, interaction terms",
    "behavior_indicators": "willingness to cross | unsafe distance, safe distance",
    "behavioral_model": "LMM"
  },
  {
    "id": "li_-road_2020",
    "display_label": "Li et al. (2020)",
    "title": "On-road and online studies to investigate beliefs and behaviors of Netherlands, US and Mexico pedestrians encountering hidden-driver vehicles",
    "authors_full": "Li, Jamy and Currano, Rebecca and Sirkin, David and Goedicke, David and Tennent, Hamish and Levine, Aaron and Evers, Vanessa and Ju, Wendy",
    "authors_short": "Li et al.",
    "venue": "Proceedings of the 2020 ACM/IEEE International Conference on Human-Robot Interaction",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Field Study"
    ],
    "sample": "130 participants",
    "road_users_raw": "1 ped - 1 AV, multi peds - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      }
    ],
    "av_type": "AV/car",
    "scenario": "shared space (parking lot entrance)",
    "scenario_types": [
      "shared"
    ],
    "criticality": "yielding behavior depends",
    "model_rows": [
      {
        "input_factors": "culture background, group size, car autonomy",
        "behavior_indicators": "crossing time, looking duration, path deviation, crossing decision",
        "behavioral_model": "ANOVA",
        "model_family": "statistics"
      },
      {
        "input_factors": "car autonomy",
        "behavior_indicators": "path deviation",
        "behavioral_model": "ordinal logistic regression",
        "model_family": "discrete-choice"
      },
      {
        "input_factors": "participants' feelings",
        "behavior_indicators": "looking time",
        "behavioral_model": "linear regression",
        "model_family": "linear"
      }
    ],
    "input_factors": "culture background, group size, car autonomy | car autonomy | participants' feelings",
    "behavior_indicators": "crossing time, looking duration, path deviation, crossing decision | path deviation | looking time",
    "behavioral_model": "ANOVA | ordinal logistic regression | linear regression"
  },
  {
    "id": "tapiro_pedestrian_2020",
    "display_label": "Tapiro et al. (2020)",
    "title": "Pedestrian distraction: the effects of road environment complexity and age on pedestrian’s visual attention and crossing behavior",
    "authors_full": "Tapiro, Hagai and Oron-Gilad, Tal and Parmet, Yisrael",
    "authors_short": "Tapiro et al.",
    "venue": "Journal of Safety Research",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "83 participants | 996 trials",
    "road_users_raw": "1 ped - multi AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles | within-subject design: | - visual loads = low, medium, high",
    "model_rows": [
      {
        "input_factors": "age, gender, visual load, two-way interaction terms",
        "behavior_indicators": "crossing initiation time, safety margin, missed opportunities, visual attention dispersion",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "age, gender, visual load, two-way interaction terms",
    "behavior_indicators": "crossing initiation time, safety margin, missed opportunities, visual attention dispersion",
    "behavioral_model": "LMM"
  },
  {
    "id": "razmi_rad_pedestrians_2020",
    "display_label": "Razmi Rad et al. (2020)",
    "title": "Pedestrians’ road crossing behaviour in front of automated vehicles: results from a pedestrian simulation experiment using agent-based modelling",
    "authors_full": "Razmi Rad, Solmaz and Homem de Almeida Correia, Gonçalo and Hagenzieker, Marjan",
    "authors_short": "Razmi Rad et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR screen"
    ],
    "sample": "60 participants | 1620 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "TTC, vehicle type, the existence of zebra, communication way, familiarity with AV, age, gender, education level, latent behavioral variables",
        "behavior_indicators": "crossing decision",
        "behavioral_model": "GLMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "TTC, vehicle type, the existence of zebra, communication way, familiarity with AV, age, gender, education level, latent behavioral variables",
    "behavior_indicators": "crossing decision",
    "behavioral_model": "GLMM"
  },
  {
    "id": "bindschadel_interaction_2021",
    "display_label": "Bindschädel et al. (2021)",
    "title": "Interaction between pedestrians and automated vehicles: exploring a motion-based approach for virtual reality experiments",
    "authors_full": "Bindschädel, Janina and Krems, Ingo and Kiesel, Andrea",
    "authors_short": "Bindschädel et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "51 participants | 1187 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interaction with non-yielding filler vehicles",
    "model_rows": [
      {
        "input_factors": "eHMI design, experimental trial",
        "behavior_indicators": "crossing initiation time, mean walking speed",
        "behavioral_model": "LMM",
        "model_family": "linear"
      },
      {
        "input_factors": "eHMI design, experimental trial",
        "behavior_indicators": "subjective safety feeling",
        "behavioral_model": "functional linear model",
        "model_family": "linear"
      }
    ],
    "input_factors": "eHMI design, experimental trial | eHMI design, experimental trial",
    "behavior_indicators": "crossing initiation time, mean walking speed | subjective safety feeling",
    "behavioral_model": "LMM | functional linear model"
  },
  {
    "id": "chen_comparison_2020",
    "display_label": "Chen et al. (2020)",
    "title": "Comparison of pedestrians’ gap acceptance behavior towards automated and human-driven vehicles",
    "authors_full": "Chen, Wenxiang and Jiang, Qianni and Zhuang, Xiangling and Ma, Guojie",
    "authors_short": "Chen et al.",
    "venue": "Engineering Psychology and Cognitive Ergonomics. Cognition and Design",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "48 participants | 5760 trials | 12218 decisions",
    "road_users_raw": "1 ped - 1 AV | mixed environment",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way four-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "gap size, situation, gap size * situation",
        "behavior_indicators": "crossing decision",
        "behavioral_model": "logistic mixed-effect model",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size, situation, gap size * situation",
    "behavior_indicators": "crossing decision",
    "behavioral_model": "logistic mixed-effect model"
  },
  {
    "id": "nunez_velasco_will_2021",
    "display_label": "Nuñez Velasco et al. (2021)",
    "title": "Will pedestrians cross the road before an automated vehicle? The effect of drivers’ attentiveness and presence on pedestrians’ road crossing behavior",
    "authors_full": "Nuñez Velasco, Juan Pablo and Mun Lee, Yee and Uttley, Jim and Solernou, Albert and Farah, Haneen and van Arem, Bart and Hagenzieker, Marjan and Merat, Natasha",
    "authors_short": "Nuñez Velasco et al.",
    "venue": "Transportation Research Interdisciplinary Perspectives",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "20 participants | 1776 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "driver status, time gap, gender, age, trust in AVs, perceived risk, perceived behavioral control, (yielding behavior)",
        "behavior_indicators": "crossing initiation time, crossing duration, safety margin",
        "behavioral_model": "linear mixed effects model",
        "model_family": "statistics"
      },
      {
        "input_factors": "driver status, time gap, gender, age, trust in AVs, perceived risk, perceived behavioral control, (yielding behavior)",
        "behavior_indicators": "crossing decision",
        "behavioral_model": "binomial logistic mixed-effect models",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "driver status, time gap, gender, age, trust in AVs, perceived risk, perceived behavioral control, (yielding behavior) | driver status, time gap, gender, age, trust in AVs, perceived risk, perceived behavioral control, (yielding behavior)",
    "behavior_indicators": "crossing initiation time, crossing duration, safety margin | crossing decision",
    "behavioral_model": "linear mixed effects model | binomial logistic mixed-effect models"
  },
  {
    "id": "sahin_deviant_2022",
    "display_label": "Şahin et al. (2022)",
    "title": "Deviant behavior of pedestrians: a risk gamble or just against automated vehicles? How about social control?",
    "authors_full": "Şahin, Hatice and Hemesath, Sebastian and Boll, Susanne",
    "authors_short": "Şahin et al.",
    "venue": "Frontiers in Robotics and AI",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "36 participants | 860 trials",
    "road_users_raw": "1 ped - 1 AV | 1 ped - 1 HDV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "only safe interaction | within-subject design: | - task urgency: urgent, not-urgent",
    "model_rows": [
      {
        "input_factors": "vehicle type, task urgency, social control",
        "behavior_indicators": "crossing decision",
        "behavioral_model": "GLMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "vehicle type, task urgency, social control",
    "behavior_indicators": "crossing decision",
    "behavioral_model": "GLMM"
  },
  {
    "id": "wang_effect_2022",
    "display_label": "Wang et al. (2022)",
    "title": "The effect of age and sensation seeking on pedestrian crossing safety in a virtual reality street",
    "authors_full": "Wang, Huarong and Wang, Anni and Su, Fen and Schwebel, David C.",
    "authors_short": "Wang et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "193 participants | 2316 trials",
    "road_users_raw": "1 ped - 2 AVs",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "age, sensation seeking, traffic condition, start delay, missed opportunities",
        "behavior_indicators": "dangerous crossing",
        "behavioral_model": "hierarchical regression model | (for children, adolescent, and young adult separately)",
        "model_family": "statistics"
      }
    ],
    "input_factors": "age, sensation seeking, traffic condition, start delay, missed opportunities",
    "behavior_indicators": "dangerous crossing",
    "behavioral_model": "hierarchical regression model | (for children, adolescent, and young adult separately)"
  },
  {
    "id": "tian_explaining_2022",
    "display_label": "Tian et al. (2022)",
    "title": "Explaining unsafe pedestrian road crossing behaviours using a psychophysics-based gap acceptance model",
    "authors_full": "Tian, Kai and Markkula, Gustav and Wei, Chongfeng and Lee, Yee Mun and Madigan, Ruth and Merat, Natasha and Romano, Richard",
    "authors_short": "Tian et al.",
    "venue": "Safety Science",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "60 participants | 4270 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles define `unsafe decision' (safety margin<0s), `tight fits' (safety margin∈[0s, 1.5s])",
    "model_rows": [
      {
        "input_factors": "looming, vehicle speed, time gap",
        "behavior_indicators": "gap acceptance",
        "behavioral_model": "logistic mixed-effect model",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "looming, vehicle speed, time gap",
    "behavior_indicators": "gap acceptance",
    "behavioral_model": "logistic mixed-effect model"
  },
  {
    "id": "tian_deceleration_2023",
    "display_label": "Tian et al. (2023)",
    "title": "Deceleration parameters as implicit communication signals for pedestrians’ crossing decisions and estimations of automated vehicle behaviour",
    "authors_full": "Tian, Kai and Tzigieras, Athanasios and Wei, Chongfeng and Lee, Yee Mun and Holmes, Christopher and Leonetti, Matteo and Merat, Natasha and Romano, Richard and Markkula, Gustav",
    "authors_short": "Tian et al.",
    "venue": "Accident Analysis \\& Prevention",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "30 participants | 1080 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "initial speed, initial TTC, AV deceleration behavior",
        "behavior_indicators": "gap distance",
        "behavioral_model": "LMM",
        "model_family": "linear"
      },
      {
        "input_factors": "initial speed, initial TTC, AV deceleration behavior",
        "behavior_indicators": "pedestrian 'stopping' judgment",
        "behavioral_model": "mixed-effects logit regression",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "initial speed, initial TTC, AV deceleration behavior | initial speed, initial TTC, AV deceleration behavior",
    "behavior_indicators": "gap distance | pedestrian 'stopping' judgment",
    "behavioral_model": "LMM | mixed-effects logit regression"
  },
  {
    "id": "zou_pedestrian_2023",
    "display_label": "Zou et al. (2023)",
    "title": "Pedestrian behavior interacting with autonomous vehicles: role of AV operation, signal indication, and roadway infrastructure",
    "authors_full": "Zou, Fengjiao and Ogle, Jennifer and Jin, Weimin and Gerard, Patrick and Petty, Daniel and Robb, Andrew",
    "authors_short": "Zou et al.",
    "venue": "Proceedings - 2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops, VRW 2023",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "50 participants | 1332 trials/decisions",
    "road_users_raw": "1 ped - 1 AV | 1 ped - multi AVs",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      }
    ],
    "av_type": "AV/car",
    "scenario": "multi-lane roadway infrastructures",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "yielding behavior depends",
    "model_rows": [
      {
        "input_factors": "roadway infrastructure, AV signals",
        "behavior_indicators": "gap size, crossing time, waiting time",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "roadway infrastructure, AV signals",
    "behavior_indicators": "gap size, crossing time, waiting time",
    "behavioral_model": "LMM"
  },
  {
    "id": "figueroa-medina_analysis_2023",
    "display_label": "Figueroa-Medina et al. (2023)",
    "title": "Analysis of walking speeds and success rates on mid-block crossings using virtual reality simulation",
    "authors_full": "Figueroa-Medina, Alberto M. and Valdés-Díaz, Didier and Colucci-Ríos, Benjamín and Cardona-Rodríguez, Natacha and Chamorro-Parejo, Andrés",
    "authors_short": "Figueroa-Medina et al.",
    "venue": "Accident Analysis \\& Prevention",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "48 participants | 538 trials/decisions",
    "road_users_raw": "1 ped - 1 AV | 1 ped - 2 AVs | (same direction)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "(same direction)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "age group, gender, vehicle speed, lane number, number of gaps watched, interaction terms",
        "behavior_indicators": "gap size, walking speed",
        "behavioral_model": "OLS regression",
        "model_family": "linear"
      },
      {
        "input_factors": "age group, gender, vehicle speed, number of gaps watched, walking speed, gap accepted size",
        "behavior_indicators": "probability of being hit",
        "behavioral_model": "a logit model",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "age group, gender, vehicle speed, lane number, number of gaps watched, interaction terms | age group, gender, vehicle speed, number of gaps watched, walking speed, gap accepted size",
    "behavior_indicators": "gap size, walking speed | probability of being hit",
    "behavioral_model": "OLS regression | a logit model"
  },
  {
    "id": "song_pedestrians_2023",
    "display_label": "Song et al. (2023)",
    "title": "Pedestrians’ road-crossing behavior towards eHMI-equipped autonomous vehicles driving in segregated and mixed traffic conditions",
    "authors_full": "Song, Yuanming and Jiang, Qianni and Chen, Wenxiang and Zhuang, Xiangling and Ma, Guojie",
    "authors_short": "Song et al.",
    "venue": "Accident Analysis \\& Prevention",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "47 participants | 3760 trials | 9805 decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way four-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "traffic condition, gap size, vehicle speed, interaction terms",
        "behavior_indicators": "gap acceptance",
        "behavioral_model": "logistic mixed-effect model",
        "model_family": "discrete-choice"
      },
      {
        "input_factors": "traffic condition, gap size, vehicle speed, interaction terms",
        "behavior_indicators": "crossing time, safety margin",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "traffic condition, gap size, vehicle speed, interaction terms | traffic condition, gap size, vehicle speed, interaction terms",
    "behavior_indicators": "gap acceptance | crossing time, safety margin",
    "behavioral_model": "logistic mixed-effect model | LMM"
  },
  {
    "id": "watanabe_analysis_2023",
    "display_label": "Watanabe et al. (2023)",
    "title": "Analysis and modeling of traffic participants considering interactions at intersections without traffic signals",
    "authors_full": "Watanabe, Toru and Yamaguchi, Takuma and Okuda, Hiroyuki and Suzuki, Tatsuya and Wakisaka, Ryo and Ban, Kazunori",
    "authors_short": "Watanabe et al.",
    "venue": "2023 IEEE/SICE International Symposium on System Integration, SII 2023",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "unclear",
    "road_users_raw": "1 ped - 2 AVs",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-way two-lane unsignalized zebra road (pedestrian has priority)",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle should yield, as pedestrians have the highest priority",
    "model_rows": [
      {
        "input_factors": "pedestrian position and speed, position and speed of two AVs",
        "behavior_indicators": "decision",
        "behavioral_model": "logistic regression model, | a linear motion model | (for each individual)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "pedestrian position and speed, position and speed of two AVs",
    "behavior_indicators": "decision",
    "behavioral_model": "logistic regression model, | a linear motion model | (for each individual)"
  },
  {
    "id": "sobhani_impact_2018",
    "display_label": "Sobhani and Farooq (2018)",
    "title": "Impact of smartphone distraction on pedestrians’ crossing behaviour: an application of head-mounted immersive virtual reality",
    "authors_full": "Sobhani, Anae and Farooq, Bilal",
    "authors_short": "Sobhani and Farooq",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2018",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "42 participants | 420 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "under distraction | use PET-based criteria to classify risky behavior",
    "model_rows": [
      {
        "input_factors": "gender, waiting time, initial walking speed, average acceleration, average deceleration, number of head turn, number of head toward smartphone, head toward smartphone percentage before crossing",
        "behavior_indicators": "safe crossing or not",
        "behavioral_model": "MNL | (fit differently for crossing conditions)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gender, waiting time, initial walking speed, average acceleration, average deceleration, number of head turn, number of head toward smartphone, head toward smartphone percentage before crossing",
    "behavior_indicators": "safe crossing or not",
    "behavioral_model": "MNL | (fit differently for crossing conditions)"
  },
  {
    "id": "jayaraman_analysis_2020",
    "display_label": "Jayaraman et al. (2020)",
    "title": "Analysis and prediction of pedestrian crosswalk behavior during automated vehicle interactions",
    "authors_full": "Jayaraman, Kumaar and Tilbury, Dawn M. and Yang, X. Jessie and Pradhan, Anuj K. and Robert, Lionel P.",
    "authors_short": "Jayaraman et al.",
    "venue": "Proceedings - IEEE International Conference on Robotics and Automation",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "30 participants | 540 trials | 1703 decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-way two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "AV distance, longitudinal distance, curb distance, wait time, AV speed, pedestrian speed, gaze ratio",
        "behavior_indicators": "gap acceptance",
        "behavioral_model": "hybrid automaton | (with SVM)",
        "model_family": "hybrid"
      },
      {
        "input_factors": "AV distance, longitudinal distance, curb distance, wait time, AV speed, pedestrian speed, gaze ratio",
        "behavior_indicators": "decision",
        "behavioral_model": "SVM",
        "model_family": "hybrid"
      }
    ],
    "input_factors": "AV distance, longitudinal distance, curb distance, wait time, AV speed, pedestrian speed, gaze ratio | AV distance, longitudinal distance, curb distance, wait time, AV speed, pedestrian speed, gaze ratio",
    "behavior_indicators": "gap acceptance | decision",
    "behavioral_model": "hybrid automaton | (with SVM) | SVM"
  },
  {
    "id": "jayaraman_multimodal_2021",
    "display_label": "Jayaraman et al. (2021)",
    "title": "Multimodal hybrid pedestrian: a hybrid automaton model of urban pedestrian behavior for automated driving applications",
    "authors_full": "Jayaraman, Suresh Kumaar and Robert, Lionel P. and Yang, X. Jessie and Tilbury, Dawn M.",
    "authors_short": "Jayaraman et al.",
    "venue": "IEEE Access",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "540 trials | 1703 decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "onw-way two-lane unsignalized zebra (midblock) crosswalk",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "[t]2=gaze ratio, gap distance, vehicle speed, waiting time, lateral distance, longitudinal distance, pedestrian speed, vehicle lane, approaching direction",
        "behavior_indicators": "gap acceptance",
        "behavioral_model": "multimodal hybrid pedestrian or hybrid automaton (with SVM)",
        "model_family": "hybrid"
      },
      {
        "input_factors": "[t]2=gaze ratio, gap distance, vehicle speed, waiting time, lateral distance, longitudinal distance, pedestrian speed, vehicle lane, approaching direction",
        "behavior_indicators": "crossing intention | \\;",
        "behavioral_model": "SVM | \\;",
        "model_family": "hybrid"
      }
    ],
    "input_factors": "[t]2=gaze ratio, gap distance, vehicle speed, waiting time, lateral distance, longitudinal distance, pedestrian speed, vehicle lane, approaching direction | [t]2=gaze ratio, gap distance, vehicle speed, waiting time, lateral distance, longitudinal distance, pedestrian speed, vehicle lane, approaching direction",
    "behavior_indicators": "gap acceptance | crossing intention | \\;",
    "behavioral_model": "multimodal hybrid pedestrian or hybrid automaton (with SVM) | SVM | \\;"
  },
  {
    "id": "kalatian_decoding_2021",
    "display_label": "Kalatian and Farooq (2021)",
    "title": "Decoding pedestrian and automated vehicle interactions using immersive virtual reality and interpretable deep learning",
    "authors_full": "Kalatian, Arash and Farooq, Bilal",
    "authors_short": "Kalatian and Farooq",
    "venue": "Transportation Research Part C: Emerging Technologies",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "180 participants | 2291 trials/decisions",
    "road_users_raw": "1 ped - 1 AV | 1 ped - multi AVs",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      }
    ],
    "av_type": "AV/car",
    "scenario": "road type as a design factor (one-way, two-way, two-way with median)",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "only safe interaction (exclude PET ≤ 1.5s) | within-subject design: | - weather condition: snowy, clear view | - time of day: day, night",
    "model_rows": [
      {
        "input_factors": "mixed traffic conditions, previous VR experience, walk to work and shopping, time of day, past main travel mode, weather, age group, lane width, traffic density, gender, vehicle arrival rate, road type, driving license ownership, several interaction terms among above",
        "behavior_indicators": "waiting time",
        "behavioral_model": "Deep CPH model",
        "model_family": "deep-learning"
      }
    ],
    "input_factors": "mixed traffic conditions, previous VR experience, walk to work and shopping, time of day, past main travel mode, weather, age group, lane width, traffic density, gender, vehicle arrival rate, road type, driving license ownership, several interaction terms among above",
    "behavior_indicators": "waiting time",
    "behavioral_model": "Deep CPH model"
  },
  {
    "id": "kim_pedestrian_2020",
    "display_label": "Kim et al. (2020)",
    "title": "Pedestrian intention prediction for autonomous driving using a multiple stakeholder perspective model",
    "authors_full": "Kim, Kyungdo and Lee, Yoon Kyung and Ahn, Hyemin and Hahn, Sowon and Oh, Songhwai",
    "authors_short": "Kim et al.",
    "venue": "2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "39 participants | 2106 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way signalized zebra road",
    "scenario_types": [
      "signalized"
    ],
    "criticality": "unclear",
    "model_rows": [
      {
        "input_factors": "driver perspective data, pedestrian perspective data",
        "behavior_indicators": "future trajectory",
        "behavioral_model": "multiple stakeholder perspective model",
        "model_family": "hybrid"
      }
    ],
    "input_factors": "driver perspective data, pedestrian perspective data",
    "behavior_indicators": "future trajectory",
    "behavioral_model": "multiple stakeholder perspective model"
  },
  {
    "id": "kalatian_context-aware_2022",
    "display_label": "Kalatian and Farooq (2022)",
    "title": "A context-aware pedestrian trajectory prediction framework for automated vehicles",
    "authors_full": "Kalatian, Arash and Farooq, Bilal",
    "authors_short": "Kalatian and Farooq",
    "venue": "Transportation Research Part C: Emerging Technologies",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "180 participants | 3276 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "road type as a design factor (one-way, two-way, two-way with median)",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "yielding behavior depends | within-subject design: | - weather condition: snowy, clear view | - time of day: day, night",
    "model_rows": [
      {
        "input_factors": "past trajectory, head orientation, distance to AVs, road specification, traffic parameters, environmental conditions",
        "behavior_indicators": "future trajectory",
        "behavioral_model": "LSTM",
        "model_family": "deep-learning"
      }
    ],
    "input_factors": "past trajectory, head orientation, distance to AVs, road specification, traffic parameters, environmental conditions",
    "behavior_indicators": "future trajectory",
    "behavioral_model": "LSTM"
  },
  {
    "id": "shipman_novel_2022",
    "display_label": "Shipman et al. (2022)",
    "title": "Novel trajectory prediction algorithm using a full dataset: comparison and ablation studies",
    "authors_full": "Shipman, Alastair and Mead, Dan and Feng, Yuxiang and Escribano, Jose and Angeloudis, Panagiotis and Demiris, Yiannis",
    "authors_short": "Shipman et al.",
    "venue": "IEEE Conference on Intelligent Transportation Systems, Proceedings, ITSC",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "97 participants",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "yielding behavior depends",
    "model_rows": [
      {
        "input_factors": "past trajectory, position of other pedestrians and cars, contextual information (time to collision, gaze point, target position, distance to road curb)",
        "behavior_indicators": "future trajectory",
        "behavioral_model": "GAT + LSTM",
        "model_family": "deep-learning"
      }
    ],
    "input_factors": "past trajectory, position of other pedestrians and cars, contextual information (time to collision, gaze point, target position, distance to road curb)",
    "behavior_indicators": "future trajectory",
    "behavioral_model": "GAT + LSTM"
  },
  {
    "id": "pekkanen_variable-drift_2022",
    "display_label": "Pekkanen et al. (2022)",
    "title": "Variable-drift diffusion models of pedestrian road-crossing decisions",
    "authors_full": "Pekkanen, Jami and Giles, Oscar Terence and Lee, Yee Mun and Madigan, Ruth and Daimon, Tatsuru and Merat, Natasha and Markkula, Gustav",
    "authors_short": "Pekkanen et al.",
    "venue": "Computational Brain \\& Behavior",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD",
      "VR CAVE"
    ],
    "sample": "20 participants | 320 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "TTA, distance, speed, deceleration",
        "behavior_indicators": "crossing decision time (i.e., initiation time)",
        "behavioral_model": "variable-drift diffusion model",
        "model_family": "psychological"
      }
    ],
    "input_factors": "TTA, distance, speed, deceleration",
    "behavior_indicators": "crossing decision time (i.e., initiation time)",
    "behavioral_model": "variable-drift diffusion model"
  },
  {
    "id": "giles_at_2019",
    "display_label": "Giles et al. (2019)",
    "title": "At the zebra crossing: modelling complex decision processes with variable-drift diffusion models",
    "authors_full": "Giles, Oscar Terence and Markkula, Gustav and Pekkanen, Jami and Yokota, Naoki and Matsunaga, Naoto and Merat, Natasha and Daimon, Tatsuru",
    "authors_short": "Giles et al.",
    "venue": "Proceedings of the Annual Meeting of the Cognitive Science Society",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "20 participants | 320 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "apparent time to arrival, derivative of vehicles apparent time to arrival",
        "behavior_indicators": "waiting time",
        "behavioral_model": "variable-drift diffusion model (three kinds: connected, dual, single)",
        "model_family": "psychological"
      }
    ],
    "input_factors": "apparent time to arrival, derivative of vehicles apparent time to arrival",
    "behavior_indicators": "waiting time",
    "behavioral_model": "variable-drift diffusion model (three kinds: connected, dual, single)"
  },
  {
    "id": "shen_relations_2015",
    "display_label": "Shen et al. (2015)",
    "title": "Relations between temperamental fear and risky pedestrian behavior",
    "authors_full": "Shen, Jiabin and McClure, Leslie A. and Schwebel, David C.",
    "authors_short": "Shen et al.",
    "venue": "Accident Analysis \\& Prevention",
    "year": "2015",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR screen"
    ],
    "sample": "240 participants | 7200 trials",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "time-to-contact, crossing initiation time, temperamental fear",
        "behavior_indicators": "number of hits",
        "behavioral_model": "LMM | (for male and female separately)",
        "model_family": "linear"
      }
    ],
    "input_factors": "time-to-contact, crossing initiation time, temperamental fear",
    "behavior_indicators": "number of hits",
    "behavioral_model": "LMM | (for male and female separately)"
  },
  {
    "id": "kwon_pedestrians_2022",
    "display_label": "Kwon et al. (2022)",
    "title": "Pedestrians safety perception and crossing behaviors in narrow urban streets: an experimental study using immersive virtual reality technology",
    "authors_full": "Kwon, Jae-Hong and Kim, Jeongseob and Kim, Seungnam and Cho, Gi-Hyoug",
    "authors_short": "Kwon et al.",
    "venue": "Accident Analysis \\& Prevention",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "200 participants | 2000 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "four-way unsignalized intersection | road type as a within-subject factor | (shared space or not, presence of sidewalks)",
    "scenario_types": [
      "shared",
      "intersection",
      "unsignalized"
    ],
    "criticality": "barrier to visibility | measured risk perception via 4 variables (probability of crash, severity of consequence, overall crash risk, inconvenience)",
    "model_rows": [
      {
        "input_factors": "the existence of barriers to visibility, presence of geometric road patterns, presence of pavement markings, vehicle speed limit, lighting, risk perception",
        "behavior_indicators": "waiting time, crossing initiation time, crossing speed, gait variability",
        "behavioral_model": "multi-level structural equation model",
        "model_family": "causal"
      }
    ],
    "input_factors": "the existence of barriers to visibility, presence of geometric road patterns, presence of pavement markings, vehicle speed limit, lighting, risk perception",
    "behavior_indicators": "waiting time, crossing initiation time, crossing speed, gait variability",
    "behavioral_model": "multi-level structural equation model"
  },
  {
    "id": "jiang_action_2016",
    "display_label": "Jiang et al. (2016)",
    "title": "Action coordination with agents: crossing roads with a computer-generated character in a virtual environment",
    "authors_full": "Jiang, Yuanyuan and O'Neal, Elizabeth and Rahimian, Pooya and Yon, Junghum Paul and Plumert, Jodie M. and Kearney, Joseph K.",
    "authors_short": "Jiang et al.",
    "venue": "Proceedings of the ACM Symposium on Applied Perception, SAP 2016",
    "year": "2016",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "64 participants | 1280 trials",
    "road_users_raw": "1 ped - 1 AV | 2 peds - 1 AV | (both CG and human)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(both CG and human)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles | extremely rare hits observations",
    "model_rows": [
      {
        "input_factors": "gap size",
        "behavior_indicators": "gap acceptance probability",
        "behavioral_model": "mixed-effects logistic regression | (risky CG partner, safe CG partner, or human partner separately)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size",
    "behavior_indicators": "gap acceptance probability",
    "behavioral_model": "mixed-effects logistic regression | (risky CG partner, safe CG partner, or human partner separately)"
  },
  {
    "id": "jiang_acting_2018",
    "display_label": "Jiang et al. (2018)",
    "title": "Acting together: joint pedestrian road crossing in an immersive virtual environment",
    "authors_full": "Jiang, Yuanyuan and O'Neal, Elizabeth E. and Yon, Junghum Paul and Franzen, Luke and Rahimian, Pooya and Plumert, Jodie M. and Kearney, Joseph K.",
    "authors_short": "Jiang et al.",
    "venue": "ACM Transactions on Applied Perception",
    "year": "2018",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "36 participants | 780 trials",
    "road_users_raw": "1 ped - 1 AV | 2 peds - 1 AV | (human)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(human)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles | extremely rare hits observations",
    "model_rows": [
      {
        "input_factors": "gap size",
        "behavior_indicators": "gap acceptance probability",
        "behavioral_model": "mixed-effects logistic regression | (solo or pair crossing separately)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size",
    "behavior_indicators": "gap acceptance probability",
    "behavioral_model": "mixed-effects logistic regression | (solo or pair crossing separately)"
  },
  {
    "id": "jiang_joint_2019",
    "display_label": "Jiang et al. (2019)",
    "title": "Joint action in a virtual environment: crossing roads with risky vs. safe human and agent partners",
    "authors_full": "Jiang, Yuanyuan and O'Neal, Elizabeth E. and Rahimian, Pooya and Yon, Junghum Paul and Plumert, Jodie M. and Kearney, Joseph K.",
    "authors_short": "Jiang et al.",
    "venue": "IEEE Transactions on Visualization and Computer Graphics",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "96 participants | 1280 trials",
    "road_users_raw": "1 ped - 1 AV | 2 peds - 1 AV | (both CG and human)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(both CG and human)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "gap size",
        "behavior_indicators": "gap acceptance probability",
        "behavioral_model": "mixed-effects logistic regression | (risky CG partner, safe CG partner, risky human partner, or safe human partner separately)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size",
    "behavior_indicators": "gap acceptance probability",
    "behavioral_model": "mixed-effects logistic regression | (risky CG partner, safe CG partner, risky human partner, or safe human partner separately)"
  },
  {
    "id": "oneal_how_2019",
    "display_label": "O’Neal et al. (2019)",
    "title": "How does crossing roads with friends impact risk taking in young adolescents and adults?",
    "authors_full": "O’Neal, Elizabeth E. and Jiang, Yuanyuan and Brown, Kathryne and Kearney, Joseph K. and Plumert, Jodie M.",
    "authors_short": "O’Neal et al.",
    "venue": "Journal of Pediatric Psychology",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "96 participants | 2880 trials",
    "road_users_raw": "1 ped - 1 AV | 2 peds - 1 AV | (human)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(human)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "unclear",
    "model_rows": [
      {
        "input_factors": "gap size",
        "behavior_indicators": "gap acceptance probability",
        "behavioral_model": "mixed-effects logistic regression | (solo or paired crossing with a friend for adult and adolescent separately)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size",
    "behavior_indicators": "gap acceptance probability",
    "behavioral_model": "mixed-effects logistic regression | (solo or paired crossing with a friend for adult and adolescent separately)"
  },
  {
    "id": "joisten_communication_2021",
    "display_label": "Joisten et al. (2021)",
    "title": "Communication of automated vehicles and pedestrian groups: an intercultural study on pedestrians’ street crossing decisions",
    "authors_full": "Joisten, Philip and Liu, Ziyu and Theobald, Nina and Webler, Andreas and Abendroth, Bettina",
    "authors_short": "Joisten et al.",
    "venue": "Proceedings of Mensch und Computer 2021",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Online Video Survey"
    ],
    "sample": "205 participants | 1435 trials/decisions",
    "road_users_raw": "1 ped - 1 AV | 3 peds - 1 AV | (2 CG non-crossers)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(2 CG non-crossers)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane one-way unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "only safe interaction",
    "model_rows": [
      {
        "input_factors": "group size, cultural factor, eHMI design",
        "behavior_indicators": "time to make a decision, trust in AVs",
        "behavioral_model": "Cochran's Q test for nominal data, Friedman test for ordinal data",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "group size, cultural factor, eHMI design",
    "behavior_indicators": "time to make a decision, trust in AVs",
    "behavioral_model": "Cochran's Q test for nominal data, Friedman test for ordinal data"
  },
  {
    "id": "jiang_crossing_2021",
    "display_label": "Jiang et al. (2021)",
    "title": "Crossing roads with a computer-generated agent: persistent effects on perception–action tuning",
    "authors_full": "Jiang, Yuanyuan and O'Neal, Elizabeth E. and Zhou, Shiwen and Plumert, Jodie M. and Kearney, Joseph K.",
    "authors_short": "Jiang et al.",
    "venue": "ACM Transactions on Applied Perception",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR CAVE"
    ],
    "sample": "32 participants | 1920 trials",
    "road_users_raw": "1 ped - 1 AV | 2 peds - 1 AV | (box or humanoid CG)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(box or humanoid CG)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "gap size",
        "behavior_indicators": "gap acceptance probability",
        "behavioral_model": "mixed-effects logistic regression | (risky box CG, safe box CG, risky humanoid CG, or safe humanoid CG separately)",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size",
    "behavior_indicators": "gap acceptance probability",
    "behavioral_model": "mixed-effects logistic regression | (risky box CG, safe box CG, risky humanoid CG, or safe humanoid CG separately)"
  },
  {
    "id": "lanzer_interaction_2023",
    "display_label": "Lanzer et al. (2023)",
    "title": "Interaction effects of pedestrian behavior, smartphone distraction and external communication of automated vehicles on crossing and gaze behavior",
    "authors_full": "Lanzer, Mirjam and Koniakowsky, Ina and Colley, Mark and Baumann, Martin",
    "authors_short": "Lanzer et al.",
    "venue": "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "115 participants | 913 trials",
    "road_users_raw": "1 ped - 2 AVs | 4 peds - AVs | (CG crossers)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(CG crossers)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "normal vs distracted condition, yielding AVs from both directions",
    "model_rows": [
      {
        "input_factors": "eHMI presence, distraction presence, other pedestrian presence",
        "behavior_indicators": "crossing initiation time, crossing duration, gaze behavior towards traffic",
        "behavioral_model": "hierarchical linear regression",
        "model_family": "linear"
      }
    ],
    "input_factors": "eHMI presence, distraction presence, other pedestrian presence",
    "behavior_indicators": "crossing initiation time, crossing duration, gaze behavior towards traffic",
    "behavioral_model": "hierarchical linear regression"
  },
  {
    "id": "feng_does_2023",
    "display_label": "Feng et al. (2023)",
    "title": "Does another pedestrian matter? a virtual reality study on the interaction between multiple pedestrians and autonomous vehicles in shared space",
    "authors_full": "Feng, Yan and Xu, Zhenlin and Farah, Haneen and Arem, Bart van",
    "authors_short": "Feng et al.",
    "venue": "IEEE Transactions on Intelligent Transportation Systems",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "VR HMD"
    ],
    "sample": "54 participants | 948 trials/decisions",
    "road_users_raw": "1 ped - 1 AV | 2 peds - 1 AV | (human)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(human)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "unsignalized non-zebra road at T-junction or straight path",
    "scenario_types": [
      "intersection",
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "alone or not, road type, eHMI type, AV driving style, initial distance, the distance between two humans when crossing",
        "behavior_indicators": "waiting time, crossing initiation time, crossing duration, crossing distance, mean crossing speed, space gap, gaze time towards vehicles",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "alone or not, road type, eHMI type, AV driving style, initial distance, the distance between two humans when crossing",
    "behavior_indicators": "waiting time, crossing initiation time, crossing duration, crossing distance, mean crossing speed, space gap, gaze time towards vehicles",
    "behavioral_model": "LMM"
  },
  {
    "id": "hagenzieker_interactions_2020",
    "display_label": "Hagenzieker et al. (2020)",
    "title": "Interactions between cyclists and automated vehicles: results of a photo experiment",
    "authors_full": "Hagenzieker, Marjan P. and van der Kint, Sander and Vissers, Luuk and van Schagen, Ingrid N. L. G and de Bruin, Jonathan and van Gent, Paul and Commandeur, Jacques J. F.",
    "authors_short": "Hagenzieker et al.",
    "venue": "Journal of Transportation Safety \\& Security",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Photo Survey"
    ],
    "sample": "37 participants | 2100 trials/decisions",
    "road_users_raw": "1 cyc - 1 AV",
    "road_users_type": "cyclist",
    "road_users_display": [
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "within-subject design: | approach angle and priority",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "unclear",
    "model_rows": [
      {
        "input_factors": "prime on AV, car type, approach angle, priority experimental session",
        "behavior_indicators": "stated intention, fixation time",
        "behavioral_model": "descriptive analysis, repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "prime on AV, car type, approach angle, priority experimental session",
    "behavior_indicators": "stated intention, fixation time",
    "behavioral_model": "descriptive analysis, repeated measures ANOVA"
  },
  {
    "id": "vlakveld_cyclists_2020",
    "display_label": "Vlakveld et al. (2020)",
    "title": "Cyclists’ intentions to yield for automated cars at intersections when they have right of way: results of an experiment using high-quality video animations",
    "authors_full": "Vlakveld, Willem and van der Kint, Sander and Hagenzieker, Marjan P.",
    "authors_short": "Vlakveld et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2020",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Online Video Survey"
    ],
    "sample": "1009 participants | 15135 trials/decisions",
    "road_users_raw": "1 cyc - 1 AV | 1 cyc - 1 AV (eHMI) | 1 cyc - 1 HDV",
    "road_users_type": "cyclist",
    "road_users_display": [
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      },
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "5 types of intersections | (merge, face-to-face perpendicular, side-by-side perpendicular, perpendicular x 2) | cyclist has RoW",
    "scenario_types": [
      "intersection"
    ],
    "criticality": "decision moment as between-subject design: early, mid, late",
    "model_rows": [
      {
        "input_factors": "vehicle type, decision moment, prime type when watching videos",
        "behavior_indicators": "intention to slow down, the expectation of car slow down, (both in proportion)",
        "behavioral_model": "GLMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "vehicle type, decision moment, prime type when watching videos",
    "behavior_indicators": "intention to slow down, the expectation of car slow down, (both in proportion)",
    "behavioral_model": "GLMM"
  },
  {
    "id": "oskina_safety_2023",
    "display_label": "Oskina et al. (2023)",
    "title": "Safety assessment of the interaction between an automated vehicle and a cyclist: a controlled field test",
    "authors_full": "Oskina, Maria and Farah, Haneen and Morsink, Peter and Happee, Riender and van Arem, Bart",
    "authors_short": "Oskina et al.",
    "venue": "Transportation Research Record",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Field Study"
    ],
    "sample": "25 participants | 194 trials/decisions",
    "road_users_raw": "1 cyc - 1 AV",
    "road_users_type": "cyclist",
    "road_users_display": [
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane one-way road | takeover or follow",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "vehicle behavior as a design factor | measure objective and subjective risk",
    "model_rows": [
      {
        "input_factors": "trust, relative distance, automated/manual following/overtaking",
        "behavior_indicators": "objective risk, subjective risk, trust",
        "behavioral_model": "GLMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "trust, relative distance, automated/manual following/overtaking",
    "behavior_indicators": "objective risk, subjective risk, trust",
    "behavioral_model": "GLMM"
  },
  {
    "id": "nunez_velasco_cyclists_2021",
    "display_label": "Nuñez Velasco et al. (2021)",
    "title": "Cyclists’ crossing intentions when interacting with automated vehicles: a virtual reality study",
    "authors_full": "Nuñez Velasco, Juan Pablo and de Vries, Anouk and Farah, Haneen and van Arem, Bart and Hagenzieker, Marjan P.",
    "authors_short": "Nuñez Velasco et al.",
    "venue": "Information",
    "year": "2021",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "360 Video VR"
    ],
    "sample": "47 participants | 1500 trials/decisions",
    "road_users_raw": "1 cyc - 1 AV | 1 cyc - 1 HDV",
    "road_users_type": "cyclist",
    "road_users_display": [
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "intersection, (perpendicular) | undefined RoW, non-yielding AV",
    "scenario_types": [
      "intersection"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "vehicle type, gap distance, vehicle speed, priority, people's riskiness, trust in AVs, perceived behavioral control, perceived risk",
        "behavior_indicators": "crossing intentions | (maintain speed, acceleration, deceleration)",
        "behavioral_model": "MLMR",
        "model_family": "linear"
      }
    ],
    "input_factors": "vehicle type, gap distance, vehicle speed, priority, people's riskiness, trust in AVs, perceived behavioral control, perceived risk",
    "behavior_indicators": "crossing intentions | (maintain speed, acceleration, deceleration)",
    "behavioral_model": "MLMR"
  },
  {
    "id": "beauchamp_study_2022",
    "display_label": "Beauchamp et al. (2022)",
    "title": "Study of automated shuttle interactions in city traffic using surrogate measures of safety",
    "authors_full": "Beauchamp, Etienne and Saunier, Nicolas and Cloutier, Marie-Soleil",
    "authors_short": "Beauchamp et al.",
    "venue": "Transportation Research Part C: Emerging Technologies",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Field Study"
    ],
    "sample": "unclear",
    "road_users_raw": "1 ped - 1 pod | 1 cyc - 1 pod | 1 driver - 1 pod",
    "road_users_type": "both",
    "road_users_display": [
      {
        "label": "🚶 Ped × Shuttle",
        "cssClass": "ru-ped-shuttle"
      },
      {
        "label": "🚴 Cyc × Shuttle",
        "cssClass": "ru-cyc-shuttle"
      },
      {
        "label": "1 driver - 1 pod",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "intersections | (head-on, rear-end, side, parallel, leaving)",
    "scenario_types": [
      "intersection"
    ],
    "criticality": "yielding behavior depends, | multiple SMoS (PET, TTC, speed difference) are modeled",
    "model_rows": [
      {
        "input_factors": "agent type, interaction category, data collection site, speed and acceleration quantiles of the second user",
        "behavior_indicators": "PET, TTC, speed difference between two agents",
        "behavioral_model": "multivariate regression",
        "model_family": "linear"
      }
    ],
    "input_factors": "agent type, interaction category, data collection site, speed and acceleration quantiles of the second user",
    "behavior_indicators": "PET, TTC, speed difference between two agents",
    "behavioral_model": "multivariate regression"
  },
  {
    "id": "gehrke_observed_2023",
    "display_label": "Gehrke et al. (2023)",
    "title": "Observed sidewalk autonomous delivery robot interactions with pedestrians and bicyclists",
    "authors_full": "Gehrke, Steven R. and Phair, Christopher D. and Russo, Brendan J. and Smaglik, Edward J.",
    "authors_short": "Gehrke et al.",
    "venue": "Transportation Research Interdisciplinary Perspectives",
    "year": "2023",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Field Study"
    ],
    "sample": "192 participants | 192 trials/decisions",
    "road_users_raw": "1 ped - 1 delivery vehicle | 1 cyc - 1 delivery vehicle",
    "road_users_type": "both",
    "road_users_display": [
      {
        "label": "🚶 Ped × Robot",
        "cssClass": "ru-ped-delivery"
      },
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      }
    ],
    "av_type": "Delivery vehicle",
    "scenario": "shared-space at 10 sites | (same, opposite, perpendicular) | undefined RoW",
    "scenario_types": [
      "shared"
    ],
    "criticality": "PET-based severity assessment: | - dangerous conflict: PET<1.5s | - moderate conflict: 1.5s<PET<3s | - no interaction: 3s<PET",
    "model_rows": [
      {
        "input_factors": "whether the delivery vehicle initiates the interaction, interaction direction, evasive maneuver",
        "behavior_indicators": "interaction severity level based on PET",
        "behavioral_model": "ordered logistic regression",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "whether the delivery vehicle initiates the interaction, interaction direction, evasive maneuver",
    "behavior_indicators": "interaction severity level based on PET",
    "behavioral_model": "ordered logistic regression"
  },
  {
    "id": "madigan_understanding_2019",
    "display_label": "Madigan et al. (2019)",
    "title": "Understanding interactions between automated road transport systems and other road users: a video analysis",
    "authors_full": "Madigan, Ruth and Nordhoff, Sina and Fox, Charles and Ezzati Amini, Roja and Louw, Tyron and Wilbrink, Marc and Schieben, Anna and Merat, Natasha",
    "authors_short": "Madigan et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2019",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Field Study"
    ],
    "sample": "516 people",
    "road_users_raw": "1 ped - 1 shuttle, | 1 cyc - 1 shuttle | (presence of other users)",
    "road_users_type": "both",
    "road_users_display": [
      {
        "label": "🚶 Ped × Shuttle",
        "cssClass": "ru-ped-shuttle"
      },
      {
        "label": "🚴 Cyc × Shuttle",
        "cssClass": "ru-cyc-shuttle"
      },
      {
        "label": "(presence of other users)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "vary road infrastructure",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "yielding behavior depends",
    "model_rows": [
      {
        "input_factors": "road infrastructure, type of road user, gender, age group, presence of another road user",
        "behavior_indicators": "cross ahead of AV, pass alongside AV, change trajectory as AV approach, stop to let AV pass, test AV",
        "behavioral_model": "chi-square test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "road infrastructure, type of road user, gender, age group, presence of another road user",
    "behavior_indicators": "cross ahead of AV, pass alongside AV, change trajectory as AV approach, stop to let AV pass, test AV",
    "behavioral_model": "chi-square test"
  },
  {
    "id": "de_ceunynck_interact_2022",
    "display_label": "De Ceunynck et al. (2022)",
    "title": "Interact or counteract? Behavioural observation of interactions between vulnerable road users and autonomous shuttles in Oslo, Norway",
    "authors_full": "De Ceunynck, Tim and Pelssers, Brecht and Bjørnskau, Torkel and Aasvik, Ole and Fyhri, Aslak and Laureshyn, Aliaksei and Johnsson, Carl and Hagenzieker, Marjan and Martensen, Heike",
    "authors_short": "De Ceunynck et al.",
    "venue": "Traffic Safety Research",
    "year": "2022",
    "doi": null,
    "section": "Human Behavior Understanding and Prediction",
    "method": [
      "Field Study"
    ],
    "sample": "30-200 people",
    "road_users_raw": "pedestrians, | cyclists, | e-scooters - | automated shuttles",
    "road_users_type": "both",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "🚴 Cyc × AV",
        "cssClass": "ru-cyc-av"
      },
      {
        "label": "e-scooters -",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "automated shuttles",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "right-hand priority intersection, | two-way two-lane unsignalized zebra road, | strict shared-space",
    "scenario_types": [
      "shared",
      "intersection",
      "unsignalized"
    ],
    "criticality": "the occurrence of situations with critical indicator values are rare, thus not considered",
    "model_rows": [
      {
        "input_factors": "site",
        "behavior_indicators": "shuttles yield or not, overtaking or following",
        "behavioral_model": "statistics, chi-square test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "site",
    "behavior_indicators": "shuttles yield or not, overtaking or following",
    "behavioral_model": "statistics, chi-square test"
  },
  {
    "id": "mallaro_comparison_2017",
    "display_label": "Mallaro et al. (2017)",
    "title": "A comparison of head-mounted displays vs. large-screen displays for an interactive pedestrian simulator",
    "authors_full": "Mallaro, Sophia and Rahimian, Pooya and O'Neal, Elizabeth E. and Plumert, Jodie M. and Kearney, Joseph K.",
    "authors_short": "Mallaro et al.",
    "venue": "Proceedings of the 23rd ACM Symposium on Virtual Reality Software and Technology",
    "year": "2017",
    "doi": null,
    "section": "Data Collection Methods Comparison",
    "method": [
      "VR CAVE",
      "VR HMD"
    ],
    "sample": "16 participants | 320 trials",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles | collision is not observed",
    "model_rows": [
      {
        "input_factors": "gap size, simulator type",
        "behavior_indicators": "gap acceptance probability",
        "behavioral_model": "ANOVA, mixed-effects logistic regression",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "gap size, simulator type",
    "behavior_indicators": "gap acceptance probability",
    "behavioral_model": "ANOVA, mixed-effects logistic regression"
  },
  {
    "id": "pala_analysis_2021",
    "display_label": "Pala et al. (2021)",
    "title": "Analysis of street-crossing behavior: comparing a CAVE simulator and a head-mounted display among younger and older adults",
    "authors_full": "Pala, Prashant and Cavallo, Viola and Dang, Nguyen Thong and Granié, Marie-Axelle and Schneider, Sonja and Maruhn, Philipp and Bengler, Klaus",
    "authors_short": "Pala et al.",
    "venue": "Accident Analysis \\& Prevention",
    "year": "2021",
    "doi": null,
    "section": "Data Collection Methods Comparison",
    "method": [
      "VR HMD",
      "VR CAVE"
    ],
    "sample": "55 participants | 3960 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane uncontrolled non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "age group, simulator type",
        "behavior_indicators": "crossing decision, crossing initiation time, crossing speed, safety margin, collision rate",
        "behavioral_model": "ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "age group, simulator type",
    "behavior_indicators": "crossing decision, crossing initiation time, crossing speed, safety margin, collision rate",
    "behavioral_model": "ANOVA"
  },
  {
    "id": "maruhn_analyzing_2020",
    "display_label": "Maruhn et al. (2020)",
    "title": "Analyzing pedestrian behavior in augmented reality — proof of concept",
    "authors_full": "Maruhn, Philipp and Dietrich, Andre and Prasch, Lorenz and Schneider, Sonja",
    "authors_short": "Maruhn et al.",
    "venue": "2020 IEEE Conference on Virtual Reality and 3D User Interfaces (VR)",
    "year": "2020",
    "doi": null,
    "section": "Data Collection Methods Comparison",
    "method": [
      "Wizard-of-Oz",
      "AR HMD"
    ],
    "sample": "43 participants | 600 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "shared space (but look like a normal one-lane unsignalized non-zebra road) 1pt",
    "scenario_types": [
      "shared",
      "unsignalized"
    ],
    "criticality": "non-yielding vehicles",
    "model_rows": [
      {
        "input_factors": "data collection method, gap size, vehicle speed",
        "behavior_indicators": "gap acceptance probability, crossing initiation time, perceived safety",
        "behavioral_model": "logistic mixed-effects model, LMM",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "data collection method, gap size, vehicle speed",
    "behavior_indicators": "gap acceptance probability, crossing initiation time, perceived safety",
    "behavioral_model": "logistic mixed-effects model, LMM"
  },
  {
    "id": "fuest_comparison_2020",
    "display_label": "Fuest et al. (2020)",
    "title": "Comparison of methods to evaluate the influence of an automated vehicle’s driving behavior on pedestrians: Wizard of Oz, virtual reality, and video",
    "authors_full": "Fuest, Tanja and Schmidt, Elisabeth and Bengler, Klaus",
    "authors_short": "Fuest et al.",
    "venue": "Information",
    "year": "2020",
    "doi": null,
    "section": "Data Collection Methods Comparison",
    "method": [
      "Wizard-of-Oz",
      "VR HMD",
      "Online Video Survey"
    ],
    "sample": "34 participants",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior depends",
    "model_rows": [
      {
        "input_factors": "priority, driving profile ambiguity",
        "behavior_indicators": "intention recognition time, correct intention recognition rate",
        "behavioral_model": "statistic description",
        "model_family": "statistics"
      }
    ],
    "input_factors": "priority, driving profile ambiguity",
    "behavior_indicators": "intention recognition time, correct intention recognition rate",
    "behavioral_model": "statistic description"
  },
  {
    "id": "habibovic_communicating_2018",
    "display_label": "Habibovic et al. (2018)",
    "title": "Communicating intent of automated vehicles to pedestrians",
    "authors_full": "Habibovic, Azra and Lundgren, Victor Malmsten and Andersson, Jonas and Klingegard, Maria and Lagstrom, Tobias and Sirkka, Anna and Fagerlonn, Johan and Edgren, Claes and Fredriksson, Rikard and Krupenia, Stas and Saluaar, Dennis and Larsson, Pontus",
    "authors_short": "Habibovic et al.",
    "venue": "Frontiers in Psychology",
    "year": "2018",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "9 participants",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "unsignalized zebra crossing",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "vehicle status",
        "behavior_indicators": "willingness to cross, self-assessed emotional reactions (as indicator for perceived safety)",
        "behavioral_model": "Mann–Whitney U-test",
        "model_family": "statistics"
      },
      {
        "input_factors": "vehicle status",
        "behavior_indicators": "perceived safety score",
        "behavioral_model": "",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle status | vehicle status",
    "behavior_indicators": "willingness to cross, self-assessed emotional reactions (as indicator for perceived safety) | perceived safety score",
    "behavioral_model": "Mann–Whitney U-test"
  },
  {
    "id": "deb_investigating_2018",
    "display_label": "Deb et al. (2018)",
    "title": "Investigating pedestrian suggestions for external features on fully autonomous vehicles: a virtual reality experiment",
    "authors_full": "Deb, Shuchisnigdha and Strawderman, Lesley J. and Carruth, Daniel W.",
    "authors_short": "Deb et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2018",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "30 participants | 480 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "four-way intersection of two-lane streets with two-way stop signs",
    "scenario_types": [
      "intersection"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "age, gender, personal innovativeness, eHMI design, pedestrian behavior score (violation, error, lapse, aggressive behavior, and positive behavior)",
        "behavior_indicators": "waiting time, crossing duration",
        "behavioral_model": "regression analysis",
        "model_family": "statistics"
      }
    ],
    "input_factors": "age, gender, personal innovativeness, eHMI design, pedestrian behavior score (violation, error, lapse, aggressive behavior, and positive behavior)",
    "behavior_indicators": "waiting time, crossing duration",
    "behavioral_model": "regression analysis"
  },
  {
    "id": "moore_case_2019",
    "display_label": "Moore et al. (2019)",
    "title": "The case for implicit external human-machine interfaces for autonomous vehicles",
    "authors_full": "Moore, Dylan and Currano, Rebecca and Strack, G. Ella and Sirkin, David",
    "authors_short": "Moore et al.",
    "venue": "Proceedings of the 11th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2019",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "41 participants | 41 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane uncontrolled crosswalk near a roundabout",
    "scenario_types": [
      "intersection",
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "vehicle type, arrival order, vehicle distance, vehicle behavior",
        "behavior_indicators": "hesitation behavior before crossing",
        "behavioral_model": "generalized linear model",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle type, arrival order, vehicle distance, vehicle behavior",
    "behavior_indicators": "hesitation behavior before crossing",
    "behavioral_model": "generalized linear model"
  },
  {
    "id": "deb_how_2020",
    "display_label": "Deb et al. (2020)",
    "title": "How communicating features can help pedestrian safety in the presence of self-driving vehicles: virtual reality experiment",
    "authors_full": "Deb, Shuchisnigdha and Carruth, Daniel W. and Hudson, Christopher R.",
    "authors_short": "Deb et al.",
    "venue": "IEEE Transactions on Human-Machine Systems",
    "year": "2020",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "24 participants | 504 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "four-way intersection",
    "scenario_types": [
      "intersection"
    ],
    "criticality": "vehicle behavior as a design factor, but only safe interaction is observed",
    "model_rows": [
      {
        "input_factors": "driver status, eHMI design, age, personal innovativeness",
        "behavior_indicators": "decision latency, frequency of stops, gap distance",
        "behavioral_model": "ANOVA | linear regression | logistic regression",
        "model_family": "discrete-choice"
      }
    ],
    "input_factors": "driver status, eHMI design, age, personal innovativeness",
    "behavior_indicators": "decision latency, frequency of stops, gap distance",
    "behavioral_model": "ANOVA | linear regression | logistic regression"
  },
  {
    "id": "dey_distance-dependent_2020",
    "display_label": "Dey et al. (2020)",
    "title": "Distance-dependent eHMIs for the interaction between automated vehicles and pedestrians",
    "authors_full": "Dey, Debargha and Holländer, Kai and Berger, Melanie and Eggen, Berry and Martens, Marieke and Pfleging, Bastian and Terken, Jacques",
    "authors_short": "Dey et al.",
    "venue": "12th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2020",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "24 participants | 576 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignaled non-zebra road",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "time-to-arrival, eHMI design",
        "behavior_indicators": "willingness to cross",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "time-to-arrival, eHMI design",
    "behavior_indicators": "willingness to cross",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "metayer_improving_2021",
    "display_label": "Métayer and Coeugnet (2021)",
    "title": "Improving the experience in the pedestrian's interaction with an autonomous vehicle: an ergonomic comparison of external HMI",
    "authors_full": "Métayer, Natacha and Coeugnet, Stéphanie",
    "authors_short": "Métayer and Coeugnet",
    "venue": "Applied Ergonomics",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR screen"
    ],
    "sample": "49 participants | 709 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "road infrastructure as a design factor",
    "scenario_types": [
      "unclear"
    ],
    "criticality": "safe interaction only | during nighttime",
    "model_rows": [
      {
        "input_factors": "vehicle type, presence of eHMI, road infrastructure",
        "behavior_indicators": "crossing decision",
        "behavioral_model": "chi-square analysis",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle type, presence of eHMI, road infrastructure",
    "behavior_indicators": "crossing decision",
    "behavioral_model": "chi-square analysis"
  },
  {
    "id": "lau_investigating_2021",
    "display_label": "Lau et al. (2021)",
    "title": "Investigating the interplay between eHMI and dHMI for automated buses: how do contradictory signals influence a pedestrian's willingness to cross?",
    "authors_full": "Lau, Merle and Jipp, Meike and Oehl, Michael",
    "authors_short": "Lau et al.",
    "venue": "13th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Online Video Survey"
    ],
    "sample": "49 participants | 294 trials/decisions",
    "road_users_raw": "1 ped-1 automated bus",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × Shuttle",
        "cssClass": "ru-ped-shuttle"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "shared-space (perpendicular direction)",
    "scenario_types": [
      "shared"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "eHMI status, vehicle behavior",
        "behavior_indicators": "willingness to cross",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "eHMI status, vehicle behavior",
    "behavior_indicators": "willingness to cross",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "wang_pedestrian_2021",
    "display_label": "Wang et al. (2021)",
    "title": "Pedestrian interaction with automated vehicles at uncontrolled intersections",
    "authors_full": "Wang, Pei and Motamedi, Sanaz and Qi, Shouming and Zhou, Xiao and Zhang, Tingting and Chan, Ching-Yao",
    "authors_short": "Wang et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "10 participants | 120 trials",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized zebra crossing",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "eHMI design",
        "behavior_indicators": "response time, gap distance, vehicle speed",
        "behavioral_model": "ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "eHMI design",
    "behavior_indicators": "response time, gap distance, vehicle speed",
    "behavioral_model": "ANOVA"
  },
  {
    "id": "wilbrink_scaling_2021",
    "display_label": "Wilbrink et al. (2021)",
    "title": "Scaling up automated vehicles’ eHMI communication designs to interactions with multiple pedestrians – putting eHMIs to the test",
    "authors_full": "Wilbrink, Marc and Nuttelmann, Manja and Oehl, Michael",
    "authors_short": "Wilbrink et al.",
    "venue": "13th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Online Video Survey"
    ],
    "sample": "39 participants | 352 trials/decisions",
    "road_users_raw": "1 ped-1 AV | multi peds-1 AV (1 CG agent)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "unclear",
    "model_rows": [
      {
        "input_factors": "eHMI design, another pedestrian's presence, another pedestrian's positioning",
        "behavior_indicators": "willingness to cross, decision certainty",
        "behavioral_model": "multivariate ANOVA for repeated measures, t-test for repeated measures, McNemar test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "eHMI design, another pedestrian's presence, another pedestrian's positioning",
    "behavior_indicators": "willingness to cross, decision certainty",
    "behavioral_model": "multivariate ANOVA for repeated measures, t-test for repeated measures, McNemar test"
  },
  {
    "id": "soshiroda_stopping_2021",
    "display_label": "Soshiroda et al. (2021)",
    "title": "Stopping position matters: drawing a better communication between pedestrian and driverless automated vehicles on narrow roads",
    "authors_full": "Soshiroda, Jun and Lee, Jieun and Daimon, Tatsuru and Kitazaki, Satoshi",
    "authors_short": "Soshiroda et al.",
    "venue": "Proceedings of the Human Factors and Ergonomics Society Annual Meeting",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "40 participants",
    "road_users_raw": "1 ped-1 automated bus | 1 ped-1 automated golf cart",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × Shuttle",
        "cssClass": "ru-ped-shuttle"
      },
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "Shuttle/pod",
    "scenario": "one-lane unsignalized non-zebra narrow road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "vehicle type, eHMI type, deceleration type",
        "behavior_indicators": "crossing initiation time to vehicle stop, intention recognition, anxiety",
        "behavioral_model": "three-way ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "vehicle type, eHMI type, deceleration type",
    "behavior_indicators": "crossing initiation time to vehicle stop, intention recognition, anxiety",
    "behavioral_model": "three-way ANOVA"
  },
  {
    "id": "furuya_autonomous_2021",
    "display_label": "Furuya et al. (2021)",
    "title": "Autonomous vehicle visual embodiment for pedestrian interactions in crossing scenarios: virtual drivers in AVs for pedestrian crossing",
    "authors_full": "Furuya, Hiroshi and Kim, Kangsoo and Bruder, Gerd and J. Wisniewski, Pamela and F. Welch, Gregory",
    "authors_short": "Furuya et al.",
    "venue": "Extended Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "26 participants | 312 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "driver status, AV behavior",
        "behavior_indicators": "waiting time, crossing time, perceived safety",
        "behavioral_model": "repeated-measures two-way ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "driver status, AV behavior",
    "behavior_indicators": "waiting time, crossing time, perceived safety",
    "behavioral_model": "repeated-measures two-way ANOVA"
  },
  {
    "id": "faas_self-driving_2021",
    "display_label": "Faas et al. (2021)",
    "title": "Self-driving vehicles and pedestrian interaction: does an external human-machine interface mitigate the threat of a tinted windshield or a distracted driver?",
    "authors_full": "Faas, Stefanie M. and Stange, Vanessa and Baumann, Martin",
    "authors_short": "Faas et al.",
    "venue": "International Journal of Human–Computer Interaction",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "65 participants | 310 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-way two-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "eHMI presence, driver status",
        "behavior_indicators": "perceived safety",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      },
      {
        "input_factors": "eHMI presence, driver status",
        "behavior_indicators": "crossing initiation time to vehicle stop",
        "behavioral_model": "generalized estimating equation model",
        "model_family": "statistics"
      }
    ],
    "input_factors": "eHMI presence, driver status | eHMI presence, driver status",
    "behavior_indicators": "perceived safety | crossing initiation time to vehicle stop",
    "behavioral_model": "repeated measures ANOVA | generalized estimating equation model"
  },
  {
    "id": "dey_towards_2021",
    "display_label": "Dey et al. (2021)",
    "title": "Towards scalable eHMIs: designing for AV-VRU communication beyond one pedestrian",
    "authors_full": "Dey, Debargha and Van Vastenhoven, Arjen and Cuijpers, Raymond H. and Martens, Marieke and Pfleging, Bastian",
    "authors_short": "Dey et al.",
    "venue": "13th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2021",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "36 participants | 2700 trials/decisions",
    "road_users_raw": "2 peds-1 AV | (1 CG agent)",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(1 CG agent)",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interactions only",
    "model_rows": [
      {
        "input_factors": "eHMI type",
        "behavior_indicators": "willingness to cross",
        "behavioral_model": "logistic regression",
        "model_family": "discrete-choice"
      },
      {
        "input_factors": "eHMI type",
        "behavior_indicators": "positive experience, intention understanding",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "eHMI type | eHMI type",
    "behavior_indicators": "willingness to cross | positive experience, intention understanding",
    "behavioral_model": "logistic regression | repeated measures ANOVA"
  },
  {
    "id": "chang_can_2022",
    "display_label": "Chang et al. (2022)",
    "title": "Can eyes on a car reduce traffic accidents?",
    "authors_full": "Chang, Chia-Ming and Toda, Koki and Gui, Xinyue and Seo, Stela H. and Igarashi, Takeo",
    "authors_short": "Chang et al.",
    "venue": "Proceedings of the 14th International Conference on Automotive User Interfaces and Interactive Vehicular Applications",
    "year": "2022",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "18 participants | 720 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor, | define non-yielding as critical and yielding as non-critical",
    "model_rows": [
      {
        "input_factors": "gender, eHMI presence, whether critical cases",
        "behavior_indicators": "error rate",
        "behavioral_model": "paired t-test, ANOVA",
        "model_family": "statistics"
      },
      {
        "input_factors": "gender",
        "behavior_indicators": "perceived safety, perceived dangerous",
        "behavioral_model": "statistic description",
        "model_family": "statistics"
      }
    ],
    "input_factors": "gender, eHMI presence, whether critical cases | gender",
    "behavior_indicators": "error rate | perceived safety, perceived dangerous",
    "behavioral_model": "paired t-test, ANOVA | statistic description"
  },
  {
    "id": "schmitt_can_2022",
    "display_label": "Schmitt et al. (2022)",
    "title": "Can cars gesture? A case for expressive behavior within autonomous vehicle and pedestrian interactions",
    "authors_full": "Schmitt, Paul and Britten, Nicholas and Jeong, JiHyun and Coffey, Amelia and Clark, Kevin and Kothawade, Shweta Sunil and Grigore, Elena Corina and Khaw, Adam and Konopka, Christopher and Pham, Linh and Ryan, Kim and Schmitt, Christopher and Frazzoli, Emilio",
    "authors_short": "Schmitt et al.",
    "venue": "IEEE Robotics and Automation Letters",
    "year": "2022",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "60 participants | 1113 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "four-way unsignalized non-zebra interaction",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "yielding vehicles",
    "model_rows": [
      {
        "input_factors": "vehicle condition, exposure number",
        "behavior_indicators": "cross time ratio",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "vehicle condition, exposure number",
    "behavior_indicators": "cross time ratio",
    "behavioral_model": "LMM"
  },
  {
    "id": "bindschadel_two-step_2022",
    "display_label": "Bindschädel et al. (2022)",
    "title": "Two-step communication for the interaction between automated vehicles and pedestrians",
    "authors_full": "Bindschädel, Janina and Krems, Ingo and Kiesel, Andrea",
    "authors_short": "Bindschädel et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2022",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "30 participants | 771 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "communication at a far distance, communication at a close distance, AOI, distance interval",
        "behavior_indicators": "crossing initiation time, subjective safety feeling, percentage of fixation duration",
        "behavioral_model": "repeated measures ANOVA",
        "model_family": "statistics"
      }
    ],
    "input_factors": "communication at a far distance, communication at a close distance, AOI, distance interval",
    "behavior_indicators": "crossing initiation time, subjective safety feeling, percentage of fixation duration",
    "behavioral_model": "repeated measures ANOVA"
  },
  {
    "id": "bindschadel_active_2022",
    "display_label": "Bindschädel et al. (2022)",
    "title": "Active vehicle pitch motion for communication in automated driving",
    "authors_full": "Bindschädel, Janina and Krems, Ingo and Kiesel, Andrea",
    "authors_short": "Bindschädel et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2022",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "53 participants | 1344 trials/decisions",
    "road_users_raw": "1 ped - 1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "one-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "only safe interaction",
    "model_rows": [
      {
        "input_factors": "communication concepts, vehicle type",
        "behavior_indicators": "crossing initiation time, perceived safety",
        "behavioral_model": "LMM",
        "model_family": "linear"
      },
      {
        "input_factors": "repetition",
        "behavior_indicators": "learning behavior | (crossing initiation time, perceived safety)",
        "behavioral_model": "LMM | mixed-effects polynomial regression | LMM with log transformation | (predictive models)",
        "model_family": "linear"
      }
    ],
    "input_factors": "communication concepts, vehicle type | repetition",
    "behavior_indicators": "crossing initiation time, perceived safety | learning behavior | (crossing initiation time, perceived safety)",
    "behavioral_model": "LMM | LMM | mixed-effects polynomial regression | LMM with log transformation | (predictive models)"
  },
  {
    "id": "hubner_external_2022",
    "display_label": "Hübner et al. (2022)",
    "title": "External communication of automated vehicles in mixed traffic: addressing the right human interaction partner in multi-agent simulation",
    "authors_full": "Hübner, Maximilian and Feierle, Alexander and Rettenmaier, Michael and Bengler, Klaus",
    "authors_short": "Hübner et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2022",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "VR HMD"
    ],
    "sample": "42 participants",
    "road_users_raw": "1 ped-1 AV | 1 ped-1 AV-1 HDV mixed env",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way two-lane unsignalized non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "number of crashes (no observation) and minimal time-to-collision (two critical observations < 1.5s) are used for traffic safety evaluation",
    "model_rows": [
      {
        "input_factors": "interaction sequence",
        "behavior_indicators": "subjective and objective error rate, crossing initiation time, crossing duration, passing time",
        "behavioral_model": "statistic description, t-test",
        "model_family": "statistics"
      }
    ],
    "input_factors": "interaction sequence",
    "behavior_indicators": "subjective and objective error rate, crossing initiation time, crossing duration, passing time",
    "behavioral_model": "statistic description, t-test"
  },
  {
    "id": "bindschadel_using_2023",
    "display_label": "Bindschädel et al. (2023)",
    "title": "Using eHMI, acoustic signal, and pitch motion to communicate the intention of automated vehicles to pedestrians: a Wizard of Oz study",
    "authors_full": "Bindschädel, Janina and Weimann, Pauline and Kiesel, Andrea",
    "authors_short": "Bindschädel et al.",
    "venue": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "year": "2023",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Wizard-of-Oz"
    ],
    "sample": "35 participants | 835 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-lane two-way uncontrolled non-zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "safe interaction only",
    "model_rows": [
      {
        "input_factors": "pitch motion, eHMI presence, acoustic signal presence",
        "behavior_indicators": "crossing initiation time, perceived safety",
        "behavioral_model": "LMM",
        "model_family": "linear"
      }
    ],
    "input_factors": "pitch motion, eHMI presence, acoustic signal presence",
    "behavior_indicators": "crossing initiation time, perceived safety",
    "behavioral_model": "LMM"
  },
  {
    "id": "kang_designing_2023",
    "display_label": "Kang et al. (2023)",
    "title": "Designing virtual agent human-machine interfaces depending on the communication and anthropomorphism levels in augmented reality",
    "authors_full": "Kang, Yumin and Choi, SeongA and An, Eunsol and Hwang, Seokhyun and Kim, Seungjun",
    "authors_short": "Kang et al.",
    "venue": "ACM International Conference Proceeding Series",
    "year": "2023",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "AR"
    ],
    "sample": "18 participants | 360 trials/decisions",
    "road_users_raw": "1 ped-1 AV",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "🚶 Ped × AV",
        "cssClass": "ru-ped-av"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way one-lane unsignalized zebra road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor",
    "model_rows": [
      {
        "input_factors": "whether the AV yields, anthropomorphism level, communication level",
        "behavior_indicators": "crossing initiation time, perceived safety, task load",
        "behavioral_model": "repeated-measures ANOVA, various tests",
        "model_family": "statistics"
      }
    ],
    "input_factors": "whether the AV yields, anthropomorphism level, communication level",
    "behavior_indicators": "crossing initiation time, perceived safety, task load",
    "behavioral_model": "repeated-measures ANOVA, various tests"
  },
  {
    "id": "colley_scalability_2023",
    "display_label": "Colley et al. (2023)",
    "title": "Scalability in external communication of automated vehicles: evaluation and recommendations",
    "authors_full": "Colley, Mark and Britten, Julian and Rukzio, Enrico",
    "authors_short": "Colley et al.",
    "venue": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
    "year": "2023",
    "doi": null,
    "section": "Communication Design + Behavior Evaluation",
    "method": [
      "Web Survey"
    ],
    "sample": "46 participants | 1656 trials/decisions",
    "road_users_raw": "1 ped-multi AVs | multi peds-multi AVs | (2 CG agents) | mixed env",
    "road_users_type": "pedestrian",
    "road_users_display": [
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "👥 Multi Ped × AV",
        "cssClass": "ru-multi"
      },
      {
        "label": "(2 CG agents)",
        "cssClass": "ru-ped-av"
      },
      {
        "label": "Mixed Traffic",
        "cssClass": "ru-mixed-traffic"
      }
    ],
    "av_type": "AV/car",
    "scenario": "two-way four-lane unsignalized non-zebra mid-block road",
    "scenario_types": [
      "unsignalized"
    ],
    "criticality": "vehicle behavior as a design factor, dangerous collisions observed, | task is to jaywalk",
    "model_rows": [
      {
        "input_factors": "other pedestrian presence, AV yielding behavior, eHMI design",
        "behavior_indicators": "road crossing behavior",
        "behavioral_model": "statistic description",
        "model_family": "statistics"
      }
    ],
    "input_factors": "other pedestrian presence, AV yielding behavior, eHMI design",
    "behavior_indicators": "road crossing behavior",
    "behavioral_model": "statistic description"
  }
];
