class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)
    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid board id provided"
    render 'api/shared/error', status: :not_found
  end

  def update
    @list = List.find(params[:id])
    
    p params[:title]
    @list.update_attribute(:title, params[:title])
    render :update
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end