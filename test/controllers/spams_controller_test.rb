require 'test_helper'

class SpamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @spam = spams(:one)
  end

  test "should get index" do
    get spams_url
    assert_response :success
  end

  test "should get new" do
    get new_spam_url
    assert_response :success
  end

  test "should create spam" do
    assert_difference('Spam.count') do
      post spams_url, params: { spam: {  } }
    end

    assert_redirected_to spam_url(Spam.last)
  end

  test "should show spam" do
    get spam_url(@spam)
    assert_response :success
  end

  test "should get edit" do
    get edit_spam_url(@spam)
    assert_response :success
  end

  test "should update spam" do
    patch spam_url(@spam), params: { spam: {  } }
    assert_redirected_to spam_url(@spam)
  end

  test "should destroy spam" do
    assert_difference('Spam.count', -1) do
      delete spam_url(@spam)
    end

    assert_redirected_to spams_url
  end
end
