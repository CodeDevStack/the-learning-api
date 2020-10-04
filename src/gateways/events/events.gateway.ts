import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from "@nestjs/websockets";
import dayjs from "dayjs";
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
    @MessageBody() { symbols }: { symbols: string[] }
  ): Observable<
    WsResponse<{ price: string; symbol: string; timestamp: number }[]>
  > {
    if (!Array.isArray(symbols)) return;

    const numbers = interval(1000);
    const simplex = new SimplexNoise();
    const price = symbols.reduce((prices, symbol) => {
      prices[symbol] = 100;
      return prices;
    }, Object.create(null));

    return numbers.pipe(
      map((item) => {
        return {
          event: "stock",
          data: symbols.map((symbol) => {
            const delta = symbols.reduce((deltas, symbol, index) => {
              deltas[symbol] = simplex.noise2D(item + index * 1000, 0) * 10;
              return deltas;
            }, Object.create(null));

            price[symbol] = price[symbol] + delta[symbol];

            if (price[symbol] < 0) {
              price[symbol] = 0;
            }

            return {
              price: price[symbol].toFixed(2),
              symbol,
              timestamp: dayjs().valueOf()
            };
          })
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
