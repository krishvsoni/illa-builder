import {
  RESTAPIParamValues,
  MySQLParamValues,
} from "@/page/App/components/ActionEditor/Resource"

export type ActionType = "action" | "transformer"

type ActionStatus = "warning" | string

interface ActionConnectNetwork {
  totalTime: number
  prepareTime: number
  frontendTime: number
  backendTime: number
  responseSize: number
}

export interface ActionItemConfig {
  general?: RESTAPIParamValues | MySQLParamValues | string
  trigger?: "manual" | "change"
  mode?: "gui" | "plain"
  transformer?: string
  eventHandler?: EventHandler
}

interface Transformer {
  enable: boolean
  value: string
}

interface EventHandler {
  success?: string[]
  failure?: string[]
}

export interface ActionItem {
  actionId: string
  displayName: string
  resourceId?: string
  actionType: string
  status?: ActionStatus
  network?: ActionConnectNetwork
  config?: ActionItemConfig
  actionTemplate?: ActionItemConfig
}

export type ActionListState = ActionItem[]

export const actionInitialState: ActionListState = []
