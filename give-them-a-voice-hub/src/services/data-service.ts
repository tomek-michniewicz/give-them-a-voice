export interface Analysis {
  name: string;
  prompt: string;
};

export interface AnalysisUI extends Analysis {
  response: string;
}

export interface AnalysisResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: [
    {
      index: number;
      finish_reason: string;
      message: {
        role: string;
        content: string;
      }
    }
  ];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  }
}

export class DataService {

  // Put the OpenAI API key here
  OPENAI_API_KEY = '';

  async runAnalysis(analysis: Analysis, text: string): Promise<Partial<AnalysisResponse>> {

    if (this.OPENAI_API_KEY === '') {
      throw new Error('OpenAI API key is not set. Please set it in the data-service.ts file.');
    }

    const request ={
      'model': 'gpt-3.5-turbo',
      'messages': [{ 'role': 'user', 'content': analysis.prompt + text }],
    };

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.OPENAI_API_KEY}`
        },
        body: JSON.stringify(request),
      }
    );
    
    if (!response.ok) {
      throw new Error('OpenAI API call failed. Maybe the API key is invalid?');
    }

    const responseJson = await response.json();
    return responseJson;
  }
}

export const dataService = new DataService();
