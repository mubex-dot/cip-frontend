export interface session {
  action_items_json: string[];
  cohort_id: number;
  created_at: string;
  id: number;
  questions_asked_json: string[];
  status: string;
  summary: string;
  talk_listen_ratios_json: talkListenRation;
  title: string;
  topics_json: string[];
  transcription_url: string;
  updated_at: string;
  vcon_url: string;
}

export interface talkListenRation {
  talk_ratio: number;
  listen_ratio: number;
}

export type sessions = session[];
