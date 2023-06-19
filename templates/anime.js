export default {
  type: 'bubble',
  size: 'micro',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
    size: 'full',
    aspectMode: 'cover',
    aspectRatio: '320:213'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'sm',
        wrap: true
      },
      {
        type: 'box',
        layout: 'baseline',
        contents: [
          {
            type: 'text',
            text: '4.0',
            size: 'xs',
            color: '#8c8c8c',
            margin: 'md',
            flex: 0
          }
        ]
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '東京旅行',
                wrap: true,
                color: '#8c8c8c',
                size: 'xs',
                flex: 5
              }
            ]
          }
        ]
      }
    ],
    spacing: 'sm',
    paddingAll: '13px'
  }
}
