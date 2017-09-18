class Api::ItemsController < ApplicationController
  before_action :set_api_item, only: [:show, :update, :destroy]

  # GET /api/items
  # GET /api/items.json
  def index
    @api_items = Api::Item.all
  end

  # GET /api/items/1
  # GET /api/items/1.json
  def show
  end

  # POST /api/items
  # POST /api/items.json
  def create
    @api_item = Item.new(api_item_params)

    if @api_item.save
      render :show, status: :created
      render json: @api_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/items/1
  # PATCH/PUT /api/items/1.json
  def update
    if @api_item.update(api_item_params)
      render :show, status: :ok, location: @api_item
    else
      render json: @api_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/items/1
  # DELETE /api/items/1.json
  def destroy
    @api_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_item
      @api_item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_item_params
      params.fetch(:item).permit(:dish, :spice, :price)
    end
end
