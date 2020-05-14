import { RootController, SuggestionsController } from "./controllers";

export class Routes {
    public rootController: RootController = new RootController();
    public suggestionController: SuggestionsController = new SuggestionsController();

    public routes(app): void {
        app.route("/").get(this.rootController.index);
        app.route("/suggestions").get(this.suggestionController.index);
    }
}
