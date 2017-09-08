class SpamsController < ApplicationController
  before_action :set_spam, only: [:show, :edit, :update, :destroy]

  # GET /spams
  # GET /spams.json
  def index
    puts 'hello from index controller'
    @spams = Spam.all
  end

  # GET /spams/1
  # GET /spams/1.json
  def show
  end

  # GET /spams/new
  def new
    @spam = Spam.new
  end

  # GET /spams/1/edit
  def edit
  end

  # POST /spams
  # POST /spams.json
  def create
    @spam = Spam.new(spam_params)

    respond_to do |format|
      if @spam.save
        format.html { redirect_to @spam, notice: 'Spam was successfully created.' }
        format.json { render :show, status: :created, location: @spam }
      else
        format.html { render :new }
        format.json { render json: @spam.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /spams/1
  # PATCH/PUT /spams/1.json
  def update
    respond_to do |format|
      if @spam.update(spam_params)
        format.html { redirect_to @spam, notice: 'Spam was successfully updated.' }
        format.json { render :show, status: :ok, location: @spam }
      else
        format.html { render :edit }
        format.json { render json: @spam.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /spams/1
  # DELETE /spams/1.json
  def destroy
    @spam.destroy
    respond_to do |format|
      format.html { redirect_to spams_url, notice: 'Spam was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spam
      @spam = Spam.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def spam_params
      params.fetch(:spam, {})
    end
end
