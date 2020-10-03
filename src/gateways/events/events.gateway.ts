import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from "@nestjs/websockets";
import { Server } from "http";
import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";
import SimplexNoise from "simplex-noise";

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("stock")
  getStockPrice(
    @MessageBody() { symbol }: { symbol: string }
  ): Observable<WsResponse<{ price: string; symbol: string }>> {
    const numbers = interval(1000);
    const simplex = new SimplexNoise();
    let price = 100;

    return numbers.pipe(
      map((item) => {
        const dif = simplex.noise2D(item, 0) * 10;
        price = price + dif;

        if (price < 0) {
          price = 0;
        }

        return {
          event: "stock",
          data: { price: price.toFixed(2), symbol }
        };
      })
    );
  }

  @SubscribeMessage("chat")
  getFakeChat(
    @MessageBody() { message }: { message: string }
  ): Promise<{ username: string; message: string }> {
    return new Promise((res) => {
      setTimeout(() => {
        res({ username: "test", message: "Test message" });
      }, Math.floor(Math.random() * 10000));
    });
  }
}
