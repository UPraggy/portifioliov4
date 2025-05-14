import {h} from '@stencil/core'

export function projectStaticObject(){
    this.projectsListObj = [
          {
            title: 'QUERY BOARD',
            date: '04/2025',
            description: <div class="description">
                Um sistema inteligente que usa LLM (Language Model) para interpretar a estrutura real do seu banco de dados 
                incluindo tabelas e relacionamentos e retornar esses dados. <br/><br/> Inicialmente feito o BackEnd e com o 
                objetivo de ter um Front responsivo que gera os DashBoards de acordo com os dados obtidos, através de perguntas 
                ou montagens manuais.
            </div>,
            sinopse: 'Um sistema inteligente que usa LLM (Language Model) para interpretar a estrutura real do seu banco de dados  incluindo tabelas e relacionamentos e retornar esses dados.',
            imagesSlider: [
              "url('../static/imgs/project/queryBoard1.png')", 
              "url('../static/imgs/project/queryBoard2.png')",
              "url('../static/imgs/project/queryBoard3.png')"
            ],
            tecnologias: 'NodeJs - LLM - Ollama - IA - WebSocket',
            funccionality: 'https://www.linkedin.com/posts/rafael-moreira-ramos-de-rezende-16420b21b_apresentando-o-queryboard-sua-pergunta-activity-7320077577799327745-EQE9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdh0xwBdIu6TW2euY9gRDD7CyR_85V0-hE'
          },
          {
            title: 'BH Tour Assistant',
            date: '03/2025',
            description: <div class="description">
                Uma assistente virtual com foco em ser o melhor guia turístico de BH, para moradores ou turistas 
                oferecerendo informações de lugares diversos, para sair em Bh, inicialmente feito no campo de museus, 
                ele tem o poder de interpretar perguntas e retornar através de uma base o museu, horários, se está aberto 
                ou qual está aberto no momento.
            </div>,
            sinopse: 'Uma assistente virtual com foco em ser o melhor guia turístico de BH, para moradores ou turistas',
            imagesSlider: [
              "url('../static/imgs/project/bhTour1.png')", 
              "url('../static/imgs/project/bhTour2.png')",
              "url('../static/imgs/project/bhTour3.png')"
            ],
            tecnologias: 'React - NodeJs - NLP - IA - WebSocket - Figma',
            funccionality: 'https://www.linkedin.com/posts/rafael-moreira-ramos-de-rezende-16420b21b_frontend-ux-chatbot-activity-7313322726457274368-K6XC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdh0xwBdIu6TW2euY9gRDD7CyR_85V0-hE'
          },
          {
            title: 'Site Igreja São Pedro V2',
            date: '07/2024',
            description: <div class="description">
                Um app voluntário desenvolvido para a Igreja São Pedro, com foco na reformulação do design e 
                integração de uma Bíblia Digital via API própria, liturgia diária, informações da comunidade, 
                como horário, pastorais e mais. Criado como site para reduzir custos, o projeto envolveu tecnologias 
                como React, Node, MongoDB, Firebase e Figma. Voltado à comunidade, permitiu a prática de design intuitivo, 
                levantamento de requisitos e apresentação em mockup 3D.
            </div>,
            imagesSlider: [
              "url('../static/imgs/project/siteIgrejaSaoPedro.png')"
            ],
            sinopse: 'Um app voluntário e FreeLancer com acesso a Bíblia, Liturgia diária e informações sobre a comunidade através de uma API',
            tecnologias: 'React - NodeJs - RestAPI - Figma - FireBase - NoSql - MongoDb',
            funccionality: 'https://igrejasaopedroapp.web.app/'
          },
          // {
          //   title: 'SafiraShop',
          //   date: '06/2023',
          //   description: <div class="description">
          //       Um sistema inteligente que usa LLM (Language Model) para interpretar a estrutura real do seu banco de dados 
          //       incluindo tabelas e relacionamentos e retornar esses dados. <br/><br/> Inicialmente feito o BackEnd e com o 
          //       objetivo de ter um Front responsivo que gera os DashBoards de acordo com os dados obtidos, através de perguntas 
          //       ou montagens manuais.
          //   </div>,
          //   sinopse: '',
          //   imagesSlider: [],
          //   tecnologias: 'React - NodeJs - RestAPI - Figma - FireBase - NoSql - MongoDb'
          // }
        ]
}