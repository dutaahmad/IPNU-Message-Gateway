import instance from './api-service'

export const menuContent = () => instance.request(
  {
    method:"get",
    url: "/menu-content.json"
  }
)

export const imageContent = () => instance.request(
  {
    method:"get",
    url:"/gallery-content.json"
  }
)

export let sendMessageJSON = {
  message: ""
}

export const sendMessage = () => instance.request(
  {
    method: "post",
    url: "/message/post",
    data: sendMessageJSON,
    headers: {
      "Content-Type": "application/json"
    }
  }
)