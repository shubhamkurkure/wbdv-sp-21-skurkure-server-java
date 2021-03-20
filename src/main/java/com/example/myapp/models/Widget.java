package com.example.myapp.models;

public class Widget {
  private String name;
  private Long id;
  private String topicId;
  private String type;
  private Integer widgetOrder;
  private Integer size;
  private String text;
  private Integer urlRef;
  private Integer width;
  private Integer height;
  private String cssClass;
  private String style;
  private String value;

  public Widget() {
  }

  public Widget(Long id, String topicId, String type, Integer size, String text) {
    this.id = id;
    this.topicId = topicId;
    this.type = type;
    this.text = text;
    this.size = size;
  }

  public Widget(String name, Long id, String topicId, String type, Integer widgetOrder, Integer size, String text,
      Integer urlRef, Integer width, Integer height, String cssClass, String style, String value) {
    this.name = name;
    this.id = id;
    this.topicId = topicId;
    this.type = type;
    this.widgetOrder = widgetOrder;
    this.size = size;
    this.text = text;
    this.urlRef = urlRef;
    this.width = width;
    this.height = height;
    this.cssClass = cssClass;
    this.style = style;
    this.value = value;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getWidgetOrder() {
    return widgetOrder;
  }

  public void setWidgetOrder(Integer widgetOrder) {
    this.widgetOrder = widgetOrder;
  }

  public Integer getUrlRef() {
    return urlRef;
  }

  public void setUrlRef(Integer urlRef) {
    this.urlRef = urlRef;
  }

  public Integer getWidth() {
    return width;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public Integer getHeight() {
    return height;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public String getCssClass() {
    return cssClass;
  }

  public void setCssClass(String cssClass) {
    this.cssClass = cssClass;
  }

  public String getStyle() {
    return style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}
