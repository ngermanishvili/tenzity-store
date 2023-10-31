import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'sklAWynwpTiCB3xKYcoIgm8aBKkKQ0eMs3DIYh7obLuee6AOqUkP0POkyN19F1JlHNoENC2TS5aBSHwGx3V3CShd4SB8KQ07JezHj1TphnDDGx73a8fF5ltEQp8OXMogOQroN88RUY4d5rtlpOgEjdQGbLFFomSvRmgIVRU2I0OabXQS42hX'
})
